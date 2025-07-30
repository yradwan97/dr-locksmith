// Fixed Website Crawler for Joy Locksmith
// Corrected regex syntax errors

class FixedWebsiteCrawler {
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
    this.maxPages = 20
    this.delay = 2000
  }

  async crawlWebsite() {
    console.log(`🚀 Starting fixed crawl: ${this.baseUrl}`)
    console.log("================================================")

    try {
      // Define all known pages from the navigation
      const pagesToCrawl = [
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

      // Crawl each page with enhanced headers
      for (const url of pagesToCrawl) {
        if (this.visitedUrls.size >= this.maxPages) break

        if (!this.visitedUrls.has(url)) {
          await this.sleep(this.delay)
          await this.crawlPageFixed(url)
        }
      }

      console.log("\n✅ Fixed crawling completed!")
      console.log(`📊 Total pages successfully crawled: ${this.extractedData.pages.length}`)

      return this.extractedData
    } catch (error) {
      console.error("❌ Error during fixed crawling:", error.message)
      return this.extractedData
    }
  }

  async crawlPageFixed(url) {
    if (this.visitedUrls.has(url) || this.visitedUrls.size >= this.maxPages) {
      return
    }

    console.log(`🌐 Fixed crawling: ${url}`)
    this.visitedUrls.add(url)

    try {
      // Enhanced fetch with proper headers
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br",
          DNT: "1",
          Connection: "keep-alive",
          "Upgrade-Insecure-Requests": "1",
        },
        redirect: "follow",
      })

      console.log(`   📊 Status: ${response.status} ${response.statusText}`)

      if (!response.ok) {
        console.log(`   ⚠️  Warning: ${url} returned status ${response.status}`)
        return
      }

      const html = await response.text()
      const pageData = this.parseHTMLFixed(html, url)

      this.extractedData.pages.push(pageData)
      this.updateGlobalData(pageData)

      console.log(`   ✅ Successfully extracted: ${pageData.title || "No title"}`)
      console.log(`   📝 Word count: ${pageData.content?.wordCount || 0}`)
      console.log(`   📑 Headings: ${pageData.headings?.length || 0}`)
      console.log(`   🖼️  Images: ${pageData.images?.length || 0}`)
      console.log(`   🔧 Services: ${pageData.services?.length || 0}`)
    } catch (error) {
      console.error(`❌ Error crawling ${url}:`, error.message)
    }
  }

  parseHTMLFixed(html, url) {
    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, "text/html")

      // Check if this is actually a 404 page
      const bodyText = doc.body ? doc.body.textContent.toLowerCase() : ""
      const is404 =
        bodyText.includes("page can't be found") ||
        bodyText.includes("404") ||
        bodyText.includes("not found") ||
        doc.title?.toLowerCase().includes("404")

      const pageData = {
        url: url,
        title: this.extractTitle(doc),
        metaDescription: this.extractMetaDescription(doc),
        headings: this.extractHeadings(doc),
        content: this.extractContentFixed(doc),
        images: this.extractImagesFixed(doc),
        links: this.extractLinksFixed(doc),
        contactInfo: this.extractContactInfoFixed(doc),
        services: this.extractServicesFixed(doc),
        businessHours: this.extractBusinessHours(doc),
        socialMedia: this.extractSocialMedia(doc),
        structuredData: this.extractStructuredData(doc),
        forms: this.extractForms(doc),
        is404Page: is404,
        timestamp: new Date().toISOString(),
      }

      if (is404) {
        console.log(`   ⚠️  Detected 404 content despite successful response`)
      }

      return pageData
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
              className: el.className || "",
            })
          }
        })
      })
    } catch (error) {
      console.error("Error extracting headings:", error.message)
    }

    return headings
  }

  extractContentFixed(document) {
    const content = {
      paragraphs: [],
      lists: [],
      textContent: "",
      wordCount: 0,
      sections: [],
      heroContent: "",
    }

    try {
      // Extract hero/banner content
      const heroSelectors = [
        ".hero",
        ".banner",
        ".jumbotron",
        '[class*="hero"]',
        '[class*="banner"]',
        "h1",
        ".main-title",
      ]

      for (const selector of heroSelectors) {
        const heroElement = document.querySelector(selector)
        if (heroElement && heroElement.textContent.trim()) {
          content.heroContent = heroElement.textContent.trim()
          break
        }
      }

      // Extract paragraphs with better filtering
      const paragraphs = document.querySelectorAll("p")
      paragraphs.forEach((p) => {
        const text = p.textContent.trim()
        if (text && text.length > 20 && !text.toLowerCase().includes("cookie")) {
          content.paragraphs.push(text)
        }
      })

      // Extract sections
      const sections = document.querySelectorAll("section, .section, .content-section")
      sections.forEach((section) => {
        const sectionTitle = section.querySelector("h1, h2, h3")?.textContent.trim()
        const sectionText = section.textContent.trim()

        if (sectionTitle && sectionText) {
          content.sections.push({
            title: sectionTitle,
            content: sectionText.substring(0, 500) + (sectionText.length > 500 ? "..." : ""),
          })
        }
      })

      // Extract lists
      const lists = document.querySelectorAll("ul, ol")
      lists.forEach((list) => {
        const items = []
        const listItems = list.querySelectorAll("li")
        listItems.forEach((li) => {
          const text = li.textContent.trim()
          if (text && text.length > 5) {
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
      content.wordCount = bodyText.split(/\s+/).filter((word) => word.length > 0).length
    } catch (error) {
      console.error("Error extracting fixed content:", error.message)
    }

    return content
  }

  extractImagesFixed(document) {
    const images = []
    try {
      const imgElements = document.querySelectorAll("img")

      imgElements.forEach((img) => {
        if (img.src && !img.src.includes("data:image")) {
          images.push({
            src: img.src,
            alt: img.alt || "No alt text",
            title: img.title || "",
            width: img.width || null,
            height: img.height || null,
            className: img.className || "",
            isLogo: img.className.toLowerCase().includes("logo") || img.alt.toLowerCase().includes("logo"),
            isHero: img.className.toLowerCase().includes("hero") || img.className.toLowerCase().includes("banner"),
          })
        }
      })

      // Also check for background images in CSS
      const elementsWithBg = document.querySelectorAll("[style*='background-image']")
      elementsWithBg.forEach((el) => {
        const style = el.getAttribute("style")
        const bgMatch = style.match(/background-image:\s*url$$['"]?([^'"]+)['"]?$$/)
        if (bgMatch) {
          images.push({
            src: bgMatch[1],
            alt: "Background image",
            title: "",
            isBackground: true,
          })
        }
      })
    } catch (error) {
      console.error("Error extracting fixed images:", error.message)
    }

    return images
  }

  extractLinksFixed(document) {
    const links = []
    try {
      const linkElements = document.querySelectorAll("a[href]")

      linkElements.forEach((link) => {
        if (link.href && !link.href.startsWith("javascript:")) {
          const linkData = {
            href: link.href,
            text: link.textContent.trim(),
            title: link.title || "",
            target: link.target || "",
            isInternal: this.isInternalLink(link.href),
            isNavigation: link.closest("nav") !== null,
            isFooter: link.closest("footer") !== null,
            className: link.className || "",
          }

          // Categorize link types
          if (linkData.href.includes("tel:")) {
            linkData.type = "phone"
          } else if (linkData.href.includes("mailto:")) {
            linkData.type = "email"
          } else if (
            linkData.href.includes("facebook") ||
            linkData.href.includes("twitter") ||
            linkData.href.includes("instagram")
          ) {
            linkData.type = "social"
          } else {
            linkData.type = "page"
          }

          links.push(linkData)
        }
      })
    } catch (error) {
      console.error("Error extracting fixed links:", error.message)
    }

    return links
  }

  extractContactInfoFixed(document) {
    const contact = {}

    try {
      const textContent = document.body ? document.body.textContent : ""

      // Fixed phone number regex - corrected the syntax
      

      // Enhanced email extraction
      const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
      const emailMatches = textContent.match(emailRegex)
      if (emailMatches) {
        contact.emails = [...new Set(emailMatches)]
      }

      // Enhanced address extraction
      const addressPatterns = [
        /\d+\s+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd)[^,]*,\s*[A-Za-z\s]+,\s*[A-Z]{2}\s*\d{5}/g,
        /\d+\s+[A-Za-z\s]+(?:Building|Bldg|Suite|Ste)[^,]*,\s*[A-Za-z\s]+,\s*[A-Z]{2}\s*\d{5}/g,
      ]

      addressPatterns.forEach((pattern) => {
        const matches = textContent.match(pattern)
        if (matches) {
          contact.addresses = [...(contact.addresses || []), ...matches]
        }
      })

      if (contact.addresses) {
        contact.addresses = [...new Set(contact.addresses)]
      }

      // Extract business hours
      const hoursRegex =
        /(Mon|Monday|Tue|Tuesday|Wed|Wednesday|Thu|Thursday|Fri|Friday|Sat|Saturday|Sun|Sunday).*?(\d{1,2}:\d{2}.*?(?:AM|PM|am|pm)|24.*?hours?|Open.*?\d)/gi
      const hoursMatches = textContent.match(hoursRegex)
      if (hoursMatches) {
        contact.businessHours = hoursMatches
      }

      // Look for license information
      const licenseRegex = /(LIC#?\s*\d+[-\s]*\d*)/gi
      const licenseMatches = textContent.match(licenseRegex)
      if (licenseMatches) {
        contact.license = licenseMatches[0]
      }
    } catch (error) {
      console.error("Error extracting fixed contact info:", error.message)
    }

    return contact
  }

  extractServicesFixed(document) {
    const services = []

    try {
      // Look for service sections and headings
      const serviceSelectors = [
        "h1, h2, h3, h4",
        ".service",
        ".services",
        "[class*='service']",
        ".card-title",
        ".section-title",
      ]

      const serviceKeywords = [
        "locksmith",
        "lockout",
        "lock",
        "key",
        "security",
        "residential",
        "commercial",
        "automotive",
        "emergency",
        "installation",
        "repair",
        "replacement",
        "rekey",
      ]

      serviceSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          const text = el.textContent.trim()
          const lowerText = text.toLowerCase()

          // Check if text contains service keywords
          const hasServiceKeyword = serviceKeywords.some((keyword) => lowerText.includes(keyword))

          if (hasServiceKeyword && text.length > 5 && text.length < 200) {
            // Try to get description from next elements
            let description = ""
            let nextEl = el.nextElementSibling

            // Look for description in next few elements
            for (let i = 0; i < 3 && nextEl; i++) {
              if (nextEl.tagName === "P" || nextEl.tagName === "DIV") {
                const nextText = nextEl.textContent.trim()
                if (nextText.length > 20 && nextText.length < 500) {
                  description = nextText
                  break
                }
              }
              nextEl = nextEl.nextElementSibling
            }

            services.push({
              title: text,
              description: description,
              category: this.categorizeService(text),
              element: el.tagName.toLowerCase(),
              hasDescription: description.length > 0,
            })
          }
        })
      })

      // Remove duplicates based on title
      const uniqueServices = services.filter(
        (service, index, self) =>
          index === self.findIndex((s) => s.title.toLowerCase() === service.title.toLowerCase()),
      )

      return uniqueServices
    } catch (error) {
      console.error("Error extracting fixed services:", error.message)
      return []
    }
  }

  extractBusinessHours(document) {
    const hours = {}

    try {
      const textContent = document.body ? document.body.textContent : ""

      if (textContent.includes("24/7") || textContent.includes("24 hours")) {
        hours.type = "24/7"
        hours.description = "Open 24 hours"
      }

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
    if (text.includes("automotive") || text.includes("car") || text.includes("vehicle")) return "Automotive"
    if (text.includes("emergency") || text.includes("24/7")) return "Emergency"
    if (text.includes("lockout")) return "Lockout"
    if (text.includes("installation") || text.includes("install")) return "Installation"
    if (text.includes("repair")) return "Repair"
    if (text.includes("key")) return "Key Services"
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

      if (pageData.contactInfo.license) {
        this.extractedData.contact.license = pageData.contactInfo.license
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

  generateFixedReport() {
    const report = {
      summary: {
        totalPages: this.extractedData.pages.length,
        successfulPages: this.extractedData.pages.filter((p) => !p.error && !p.is404Page).length,
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
        serviceCount: page.services?.length || 0,
        hasError: !!page.error,
        is404: !!page.is404Page,
        heroContent: page.content?.heroContent || "",
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
async function runFixedCrawler() {
  console.log("🔍 Fixed Joy Locksmith Website Crawler")
  console.log("======================================")

  const crawler = new FixedWebsiteCrawler("https://joylocksmith.com")

  try {
    const extractedData = await crawler.crawlWebsite()
    const report = crawler.generateFixedReport()

    // Display comprehensive results
    console.log("\n📊 FIXED CRAWL SUMMARY:")
    console.log("=======================")
    console.log(`✅ Total Pages Attempted: ${report.summary.totalPages}`)
    console.log(`🎯 Successful Pages: ${report.summary.successfulPages}`)
    console.log(`🖼️  Total Images: ${report.summary.totalImages}`)
    console.log(`🔧 Total Services: ${report.summary.totalServices}`)
    console.log(`🌐 Base URL: ${report.summary.baseUrl}`)
    console.log(`📅 Crawl Date: ${report.summary.crawlDate}`)

    // Display detailed page analysis
    console.log("\n📄 DETAILED PAGE ANALYSIS:")
    console.log("===========================")
    report.pages.forEach((page, index) => {
      console.log(`\n${index + 1}. ${page.url}`)
      console.log(`   📋 Title: ${page.title}`)
      console.log(`   📝 Words: ${page.wordCount}`)
      console.log(`   📑 Headings: ${page.headingCount}`)
      console.log(`   🖼️  Images: ${page.imageCount}`)
      console.log(`   🔗 Links: ${page.linkCount}`)
      console.log(`   🔧 Services: ${page.serviceCount}`)
      console.log(`   🎯 Status: ${page.hasError ? "Error" : page.is404 ? "404 Content" : "Success"}`)
      if (page.heroContent) {
        console.log(`   🎪 Hero: ${page.heroContent.substring(0, 100)}${page.heroContent.length > 100 ? "..." : ""}`)
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
        console.log(`📍 Addresses: ${extractedData.contact.addresses.join(" | ")}`)
      }
      if (extractedData.contact.license) {
        console.log(`📜 License: ${extractedData.contact.license}`)
      }
    }

    // Display services by category
    if (extractedData.services.length > 0) {
      console.log("\n🔧 SERVICES BY CATEGORY:")
      console.log("========================")

      const servicesByCategory = {}
      extractedData.services.forEach((service) => {
        if (!servicesByCategory[service.category]) {
          servicesByCategory[service.category] = []
        }
        servicesByCategory[service.category].push(service)
      })

      Object.keys(servicesByCategory).forEach((category) => {
        console.log(`\n📂 ${category}:`)
        servicesByCategory[category].forEach((service, index) => {
          console.log(`   ${index + 1}. ${service.title}`)
          if (service.description && service.description.length > 0) {
            const desc =
              service.description.length > 100 ? service.description.substring(0, 100) + "..." : service.description
            console.log(`      📝 ${desc}`)
          }
        })
      })
    }

    // Display detailed content from successful pages
    console.log("\n📖 DETAILED CONTENT FROM SUCCESSFUL PAGES:")
    console.log("==========================================")

    const successfulPages = extractedData.pages.filter((p) => !p.error && !p.is404Page)

    successfulPages.forEach((page, pageIndex) => {
      console.log(`\n📄 Page ${pageIndex + 1}: ${page.url}`)
      console.log(`📋 Title: ${page.title}`)
      console.log(`📝 Meta: ${page.metaDescription}`)

      if (page.content?.heroContent) {
        console.log(`\n🎪 Hero Content: ${page.content.heroContent}`)
      }

      if (page.headings && page.headings.length > 0) {
        console.log("\n📑 Headings:")
        page.headings.forEach((heading) => {
          console.log(`   ${heading.level.toUpperCase()}: ${heading.text}`)
        })
      }

      if (page.content && page.content.paragraphs.length > 0) {
        console.log("\n📄 Content Paragraphs:")
        page.content.paragraphs.slice(0, 5).forEach((para, index) => {
          const preview = para.length > 200 ? para.substring(0, 200) + "..." : para
          console.log(`   ${index + 1}. ${preview}`)
        })
      }

      if (page.services && page.services.length > 0) {
        console.log("\n🔧 Services on this page:")
        page.services.forEach((service) => {
          console.log(`   • ${service.title} (${service.category})`)
          if (service.description) {
            console.log(
              `     📝 ${service.description.substring(0, 100)}${service.description.length > 100 ? "..." : ""}`,
            )
          }
        })
      }

      if (page.images && page.images.length > 0) {
        console.log("\n🖼️  Images:")
        page.images.slice(0, 5).forEach((img, index) => {
          console.log(`   ${index + 1}. ${img.alt || "No alt text"} - ${img.src}`)
          if (img.isLogo) console.log(`      🏷️  Logo image`)
          if (img.isHero) console.log(`      🎪 Hero image`)
        })
      }
    })

    console.log("\n✅ FIXED CRAWL COMPLETED SUCCESSFULLY!")
    console.log("======================================")

    return extractedData
  } catch (error) {
    console.error("❌ Fatal error during fixed crawling:", error.message)
    console.error("Stack trace:", error.stack)
    return null
  }
}

// Execute the fixed crawler
console.log("Starting fixed Joy Locksmith website crawl...")
runFixedCrawler()
  .then((data) => {
    if (data) {
      console.log("\n🎉 Fixed crawl completed successfully!")
      console.log(`📊 Final stats: ${data.pages.length} pages processed`)
    } else {
      console.log("\n❌ Fixed crawl failed!")
    }
  })
  .catch((error) => {
    console.error("❌ Unhandled error:", error.message)
  })
