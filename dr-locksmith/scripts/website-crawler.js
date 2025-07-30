// Website Crawler for Fleet Locksmith
// This script crawls the joylocksmith.com website and extracts all data

class WebsiteCrawler {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.visitedUrls = new Set()
    this.extractedData = {
      pages: [],
      navigation: [],
      contact: {},
      services: [],
      businessInfo: {},
      seo: {},
      images: [],
      links: [],
    }
    this.maxPages = 20 // Limit to prevent infinite crawling
    this.delay = 1000 // 1 second delay between requests
  }

  async crawlWebsite() {
    console.log(`🚀 Starting to crawl: ${this.baseUrl}`)
    console.log("================================================")

    try {
      // Start with the homepage
      await this.crawlPage(this.baseUrl)

      // Define common pages to crawl
      const commonPages = [
        `${this.baseUrl}`,
        `${this.baseUrl}/residential`,
        `${this.baseUrl}/commercial`,
        `${this.baseUrl}/automotive`,
        `${this.baseUrl}/locations`,
        `${this.baseUrl}/about`,
        `${this.baseUrl}/contact`,
        `${this.baseUrl}/services`,
        `${this.baseUrl}/emergency`,
      ]

      // Crawl common pages
      for (const url of commonPages) {
        if (this.visitedUrls.size >= this.maxPages) break

        if (!this.visitedUrls.has(url)) {
          await this.sleep(this.delay)
          await this.crawlPage(url)
        }
      }

      console.log("\n✅ Crawling completed!")
      console.log(`📊 Total pages crawled: ${this.extractedData.pages.length}`)

      return this.extractedData
    } catch (error) {
      console.error("❌ Error during crawling:", error.message)
      return this.extractedData
    }
  }

  async crawlPage(url) {
    if (this.visitedUrls.has(url) || this.visitedUrls.size >= this.maxPages) {
      return
    }

    console.log(`🌐 Crawling: ${url}`)
    this.visitedUrls.add(url)

    try {
      const response = await fetch(url)

      if (!response.ok) {
        console.log(`⚠️  Warning: ${url} returned status ${response.status}`)
        return
      }

      const html = await response.text()
      const pageData = this.parseHTML(html, url)

      this.extractedData.pages.push(pageData)
      this.updateGlobalData(pageData)

      console.log(`   ✓ Extracted: ${pageData.title || "No title"}`)
    } catch (error) {
      console.error(`❌ Error crawling ${url}:`, error.message)
    }
  }

  parseHTML(html, url) {
    try {
      // Create a simple DOM parser using DOMParser (available in browser)
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, "text/html")

      return {
        url: url,
        title: this.extractTitle(doc),
        metaDescription: this.extractMetaDescription(doc),
        headings: this.extractHeadings(doc),
        content: this.extractContent(doc),
        images: this.extractImages(doc),
        links: this.extractLinks(doc),
        contactInfo: this.extractContactInfo(doc),
        services: this.extractServices(doc),
        businessHours: this.extractBusinessHours(doc),
        socialMedia: this.extractSocialMedia(doc),
        structuredData: this.extractStructuredData(doc),
        forms: this.extractForms(doc),
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      console.error(`Error parsing HTML for ${url}:`, error.message)
      return {
        url: url,
        error: error.message,
        timestamp: new Date().toISOString(),
      }
    }
  }

  extractTitle(document) {
    try {
      const title = document.querySelector("title")
      return title ? title.textContent.trim() : "No title found"
    } catch (error) {
      return "Error extracting title"
    }
  }

  extractMetaDescription(document) {
    try {
      const metaDesc = document.querySelector('meta[name="description"]')
      return metaDesc ? metaDesc.getAttribute("content") : "No meta description"
    } catch (error) {
      return "Error extracting meta description"
    }
  }

  extractHeadings(document) {
    const headings = []
    try {
      const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"]

      headingTags.forEach((tag) => {
        const elements = document.querySelectorAll(tag)
        elements.forEach((el) => {
          if (el.textContent.trim()) {
            headings.push({
              level: tag,
              text: el.textContent.trim(),
              id: el.id || null,
            })
          }
        })
      })
    } catch (error) {
      console.error("Error extracting headings:", error.message)
    }

    return headings
  }

  extractContent(document) {
    const content = {
      paragraphs: [],
      lists: [],
      textContent: "",
      wordCount: 0,
    }

    try {
      // Extract paragraphs
      const paragraphs = document.querySelectorAll("p")
      paragraphs.forEach((p) => {
        const text = p.textContent.trim()
        if (text && text.length > 10) {
          // Filter out very short paragraphs
          content.paragraphs.push(text)
        }
      })

      // Extract lists
      const lists = document.querySelectorAll("ul, ol")
      lists.forEach((list) => {
        const items = []
        const listItems = list.querySelectorAll("li")
        listItems.forEach((li) => {
          const text = li.textContent.trim()
          if (text) {
            items.push(text)
          }
        })
        if (items.length > 0) {
          content.lists.push({
            type: list.tagName.toLowerCase(),
            items: items,
          })
        }
      })

      // Get all text content
      const bodyText = document.body ? document.body.textContent.trim() : ""
      content.textContent = bodyText
      content.wordCount = bodyText.split(/\s+/).length
    } catch (error) {
      console.error("Error extracting content:", error.message)
    }

    return content
  }

  extractImages(document) {
    const images = []
    try {
      const imgElements = document.querySelectorAll("img")

      imgElements.forEach((img) => {
        if (img.src) {
          images.push({
            src: img.src,
            alt: img.alt || "No alt text",
            title: img.title || "",
            width: img.width || null,
            height: img.height || null,
          })
        }
      })
    } catch (error) {
      console.error("Error extracting images:", error.message)
    }

    return images
  }

  extractLinks(document) {
    const links = []
    try {
      const linkElements = document.querySelectorAll("a[href]")

      linkElements.forEach((link) => {
        if (link.href) {
          links.push({
            href: link.href,
            text: link.textContent.trim(),
            title: link.title || "",
            target: link.target || "",
            isInternal: this.isInternalLink(link.href),
          })
        }
      })
    } catch (error) {
      console.error("Error extracting links:", error.message)
    }

    return links
  }

  extractContactInfo(document) {
    const contact = {}

    try {
      const textContent = document.body ? document.body.textContent : ""

      // Look for phone numbers
      const phoneRegex = /($$?\d{3}$$?[-.\s]?\d{3}[-.\s]?\d{4})/g
      const phoneMatches = textContent.match(phoneRegex)
      if (phoneMatches) {
        contact.phones = [...new Set(phoneMatches)]
      }

      // Look for email addresses
      const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
      const emailMatches = textContent.match(emailRegex)
      if (emailMatches) {
        contact.emails = [...new Set(emailMatches)]
      }

      // Look for addresses (simple pattern)
      const addressRegex =
        /\d+\s+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd)[^,]*,\s*[A-Za-z\s]+,\s*[A-Z]{2}\s*\d{5}/g
      const addressMatches = textContent.match(addressRegex)
      if (addressMatches) {
        contact.addresses = [...new Set(addressMatches)]
      }
    } catch (error) {
      console.error("Error extracting contact info:", error.message)
    }

    return contact
  }

  extractServices(document) {
    const services = []

    try {
      // Look for service-related headings and content
      const headings = document.querySelectorAll("h1, h2, h3, h4")

      headings.forEach((heading) => {
        const text = heading.textContent.trim()
        const lowerText = text.toLowerCase()

        if (
          lowerText.includes("locksmith") ||
          lowerText.includes("service") ||
          lowerText.includes("residential") ||
          lowerText.includes("commercial") ||
          lowerText.includes("automotive") ||
          lowerText.includes("emergency")
        ) {
          // Try to get description from next element
          let description = ""
          const nextElement = heading.nextElementSibling
          if (nextElement && nextElement.tagName === "P") {
            description = nextElement.textContent.trim()
          }

          services.push({
            title: text,
            description: description,
            category: this.categorizeService(text),
          })
        }
      })
    } catch (error) {
      console.error("Error extracting services:", error.message)
    }

    return services
  }

  extractBusinessHours(document) {
    const hours = {}

    try {
      const textContent = document.body ? document.body.textContent : ""

      // Look for common business hours patterns
      if (textContent.includes("24/7") || textContent.includes("24 hours")) {
        hours.type = "24/7"
        hours.description = "Open 24 hours"
      }

      // Look for specific hours
      const hourPattern = /(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)/gi
      const hourMatches = textContent.match(hourPattern)
      if (hourMatches) {
        hours.found = hourMatches
      }
    } catch (error) {
      console.error("Error extracting business hours:", error.message)
    }

    return hours
  }

  extractSocialMedia(document) {
    const socialMedia = []

    try {
      const socialLinks = document.querySelectorAll(
        'a[href*="facebook"], a[href*="twitter"], a[href*="instagram"], a[href*="linkedin"], a[href*="youtube"]',
      )

      socialLinks.forEach((link) => {
        socialMedia.push({
          platform: this.identifySocialPlatform(link.href),
          url: link.href,
        })
      })
    } catch (error) {
      console.error("Error extracting social media:", error.message)
    }

    return socialMedia
  }

  extractStructuredData(document) {
    const structuredData = []

    try {
      const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]')

      jsonLdScripts.forEach((script) => {
        try {
          const data = JSON.parse(script.textContent)
          structuredData.push(data)
        } catch (parseError) {
          console.error("Error parsing structured data:", parseError.message)
        }
      })
    } catch (error) {
      console.error("Error extracting structured data:", error.message)
    }

    return structuredData
  }

  extractForms(document) {
    const forms = []

    try {
      const formElements = document.querySelectorAll("form")

      formElements.forEach((form) => {
        const formData = {
          action: form.action || "",
          method: form.method || "get",
          fields: [],
        }

        const inputs = form.querySelectorAll("input, textarea, select")
        inputs.forEach((input) => {
          formData.fields.push({
            type: input.type || input.tagName.toLowerCase(),
            name: input.name || "",
            placeholder: input.placeholder || "",
            required: input.required || false,
          })
        })

        forms.push(formData)
      })
    } catch (error) {
      console.error("Error extracting forms:", error.message)
    }

    return forms
  }

  // Helper methods
  isInternalLink(url) {
    try {
      if (url.startsWith("/") || url.startsWith("#")) return true
      const urlObj = new URL(url)
      const baseUrlObj = new URL(this.baseUrl)
      return urlObj.hostname === baseUrlObj.hostname
    } catch (error) {
      return false
    }
  }

  identifySocialPlatform(url) {
    if (url.includes("facebook")) return "Facebook"
    if (url.includes("twitter")) return "Twitter"
    if (url.includes("instagram")) return "Instagram"
    if (url.includes("linkedin")) return "LinkedIn"
    if (url.includes("youtube")) return "YouTube"
    return "Unknown"
  }

  categorizeService(serviceText) {
    const text = serviceText.toLowerCase()
    if (text.includes("residential") || text.includes("home")) return "Residential"
    if (text.includes("commercial") || text.includes("business")) return "Commercial"
    if (text.includes("automotive") || text.includes("car")) return "Automotive"
    if (text.includes("emergency")) return "Emergency"
    return "General"
  }

  updateGlobalData(pageData) {
    try {
      // Update global contact info
      if (pageData.contactInfo.phones) {
        this.extractedData.contact.phones = [
          ...(this.extractedData.contact.phones || []),
          ...pageData.contactInfo.phones,
        ]
        // Remove duplicates
        this.extractedData.contact.phones = [...new Set(this.extractedData.contact.phones)]
      }

      if (pageData.contactInfo.emails) {
        this.extractedData.contact.emails = [
          ...(this.extractedData.contact.emails || []),
          ...pageData.contactInfo.emails,
        ]
        this.extractedData.contact.emails = [...new Set(this.extractedData.contact.emails)]
      }

      if (pageData.contactInfo.addresses) {
        this.extractedData.contact.addresses = [
          ...(this.extractedData.contact.addresses || []),
          ...pageData.contactInfo.addresses,
        ]
        this.extractedData.contact.addresses = [...new Set(this.extractedData.contact.addresses)]
      }

      // Update global services
      this.extractedData.services = [...this.extractedData.services, ...pageData.services]

      // Update global images
      this.extractedData.images = [...this.extractedData.images, ...pageData.images]
    } catch (error) {
      console.error("Error updating global data:", error.message)
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  generateReport() {
    const report = {
      summary: {
        totalPages: this.extractedData.pages.length,
        totalImages: this.extractedData.images.length,
        totalServices: this.extractedData.services.length,
        crawlDate: new Date().toISOString(),
        baseUrl: this.baseUrl,
      },
      pages: this.extractedData.pages.map((page) => ({
        url: page.url,
        title: page.title,
        wordCount: page.content?.wordCount || 0,
        headingCount: page.headings?.length || 0,
        imageCount: page.images?.length || 0,
        linkCount: page.links?.length || 0,
        hasError: !!page.error,
      })),
      globalData: {
        contact: this.extractedData.contact,
        services: this.extractedData.services,
        businessInfo: this.extractedData.businessInfo,
      },
    }

    return report
  }
}

// Main execution function
async function crawlFleetLocksmith() {
  console.log("🔍 Fleet Locksmith Website Crawler")
  console.log("==================================")

  const crawler = new WebsiteCrawler("https://joylocksmith.com")

  try {
    const extractedData = await crawler.crawlWebsite()
    const report = crawler.generateReport()

    // Display comprehensive results
    console.log("\n📊 CRAWL SUMMARY:")
    console.log("================")
    console.log(`✅ Total Pages: ${report.summary.totalPages}`)
    console.log(`🖼️  Total Images: ${report.summary.totalImages}`)
    console.log(`🔧 Total Services: ${report.summary.totalServices}`)
    console.log(`🌐 Base URL: ${report.summary.baseUrl}`)
    console.log(`📅 Crawl Date: ${report.summary.crawlDate}`)

    // Display page details
    console.log("\n📄 PAGE ANALYSIS:")
    console.log("=================")
    report.pages.forEach((page, index) => {
      console.log(`\n${index + 1}. ${page.url}`)
      console.log(`   📋 Title: ${page.title}`)
      console.log(`   📝 Words: ${page.wordCount}`)
      console.log(`   📑 Headings: ${page.headingCount}`)
      console.log(`   🖼️  Images: ${page.imageCount}`)
      console.log(`   🔗 Links: ${page.linkCount}`)
      if (page.hasError) {
        console.log(`   ❌ Error: Yes`)
      }
    })

    // Display contact information
    if (Object.keys(extractedData.contact).length > 0) {
      console.log("\n📞 CONTACT INFORMATION:")
      console.log("======================")
      if (extractedData.contact.phones) {
        console.log(`📱 Phones: ${extractedData.contact.phones.join(", ")}`)
      }
      if (extractedData.contact.emails) {
        console.log(`📧 Emails: ${extractedData.contact.emails.join(", ")}`)
      }
      if (extractedData.contact.addresses) {
        console.log(`📍 Addresses: ${extractedData.contact.addresses.join(", ")}`)
      }
    }

    // Display services
    if (extractedData.services.length > 0) {
      console.log("\n🔧 SERVICES FOUND:")
      console.log("==================")
      const uniqueServices = [...new Set(extractedData.services.map((s) => s.title))]
      uniqueServices.forEach((service, index) => {
        console.log(`${index + 1}. ${service}`)
      })
    }

    // Display detailed content from each page
    console.log("\n📖 DETAILED CONTENT:")
    console.log("====================")

    extractedData.pages.forEach((page, pageIndex) => {
      if (page.error) {
        console.log(`\n❌ Page ${pageIndex + 1}: ${page.url} - Error: ${page.error}`)
        return
      }

      console.log(`\n📄 Page ${pageIndex + 1}: ${page.url}`)
      console.log(`📋 Title: ${page.title}`)
      console.log(`📝 Meta: ${page.metaDescription}`)

      if (page.headings && page.headings.length > 0) {
        console.log("\n📑 Headings:")
        page.headings.slice(0, 10).forEach((heading, index) => {
          console.log(`   ${heading.level.toUpperCase()}: ${heading.text}`)
        })
      }

      if (page.content && page.content.paragraphs.length > 0) {
        console.log("\n📄 Content Preview:")
        page.content.paragraphs.slice(0, 3).forEach((para, index) => {
          const preview = para.length > 150 ? para.substring(0, 150) + "..." : para
          console.log(`   ${index + 1}. ${preview}`)
        })
      }

      if (page.services && page.services.length > 0) {
        console.log("\n🔧 Services on this page:")
        page.services.forEach((service) => {
          console.log(`   • ${service.title} (${service.category})`)
        })
      }
    })

    console.log("\n✅ CRAWL COMPLETED SUCCESSFULLY!")
    console.log("================================")

    return extractedData
  } catch (error) {
    console.error("❌ Fatal error during crawling:", error.message)
    console.error("Stack trace:", error.stack)
    return null
  }
}

// Execute the crawler
console.log("Starting Fleet Locksmith website crawl...")
crawlFleetLocksmith()
  .then((data) => {
    if (data) {
      console.log("\n🎉 Crawl completed successfully!")
    } else {
      console.log("\n❌ Crawl failed!")
    }
  })
  .catch((error) => {
    console.error("❌ Unhandled error:", error.message)
  })
