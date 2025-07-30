// Crawl Greenville-specific page content
class GreenvilleCrawler {
  constructor() {
    this.extractedData = {
      title: "",
      content: "",
      services: [],
      localInfo: {},
      seo: {},
    }
  }

  async crawlGreenvillePage() {
    console.log("🌐 Crawling Greenville-specific page...")

    try {
      const response = await fetch("https://joylocksmith.com/greenville-sc/", {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        },
      })

      if (!response.ok) {
        console.log(`⚠️ Warning: ${response.status} ${response.statusText}`)
        return this.extractedData
      }

      const html = await response.text()
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, "text/html")

      // Extract title
      this.extractedData.title = doc.querySelector("title")?.textContent?.trim() || "Greenville Locksmith Services"

      // Extract meta description
      const metaDesc = doc.querySelector('meta[name="description"]')
      this.extractedData.seo.description = metaDesc?.getAttribute("content") || ""

      // Extract main content
      const contentSelectors = ["main", ".content", ".page-content", "article", ".entry-content"]
      for (const selector of contentSelectors) {
        const contentEl = doc.querySelector(selector)
        if (contentEl) {
          this.extractedData.content = contentEl.textContent.trim()
          break
        }
      }

      // Extract headings for services
      const headings = doc.querySelectorAll("h1, h2, h3, h4")
      headings.forEach((heading) => {
        const text = heading.textContent.trim()
        if (
          text.toLowerCase().includes("locksmith") ||
          text.toLowerCase().includes("service") ||
          text.toLowerCase().includes("greenville")
        ) {
          this.extractedData.services.push(text)
        }
      })

      // Extract local information
      const bodyText = doc.body?.textContent || ""

      // Look for Greenville-specific mentions
      const greenvilleMatches = bodyText.match(/Greenville[^.]*\./g) || []
      this.extractedData.localInfo.mentions = greenvilleMatches.slice(0, 5)

      // Look for service areas
      const areaPattern = /(Greenville|Spartanburg|Anderson|Greer|Mauldin|Simpsonville|Fountain Inn|Taylors)/gi
      const areas = [...new Set(bodyText.match(areaPattern) || [])]
      this.extractedData.localInfo.serviceAreas = areas

      console.log("✅ Greenville page crawled successfully!")
      console.log(`📋 Title: ${this.extractedData.title}`)
      console.log(`📝 Content length: ${this.extractedData.content.length} characters`)
      console.log(`🔧 Services found: ${this.extractedData.services.length}`)
      console.log(`📍 Service areas: ${this.extractedData.localInfo.serviceAreas?.join(", ")}`)

      return this.extractedData
    } catch (error) {
      console.error("❌ Error crawling Greenville page:", error.message)
      return this.extractedData
    }
  }
}

// Execute crawler
const crawler = new GreenvilleCrawler()
crawler.crawlGreenvillePage().then((data) => {
  console.log("\n🎉 Greenville page crawl completed!")
  console.log("Data extracted for location page creation.")
})
