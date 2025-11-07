import { useState } from "react";
import { Calendar, Tag, ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Class of 2023 First Reunion a Huge Success",
    excerpt:
      "Over 500 alumni from the Class of 2023 gathered for their first reunion. Photos and highlights available.",
    content:
      "The inaugural Class of 2023 reunion was a spectacular event, bringing together over 500 alumni from across the globe. Attendees reconnected with old friends, networked with peers from other departments, and celebrated their academic achievements.",
    date: "Feb 28, 2024",
    category: "Reunion",
    author: "Sarah Mitchell",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    readTime: 5,
  },
  {
    id: 2,
    title: "Alumni Scholarship Fund Reaches $2M Milestone",
    excerpt:
      "Thanks to generous donations from our alumni, we've reached our $2 million scholarship goal.",
    content:
      "We are thrilled to announce that the Alumni Scholarship Fund has reached the $2 million milestone! This achievement is a testament to the generosity and commitment of our alumni community.",
    date: "Feb 20, 2024",
    category: "Achievement",
    author: "Dr. James Wilson",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    readTime: 4,
  },
  {
    id: 3,
    title: "New Mentorship Program Launch",
    excerpt:
      "We're excited to announce the launch of our new mentorship program connecting students with alumni professionals.",
    content:
      "The university is launching an innovative mentorship program that connects current students with experienced alumni professionals from various industries.",
    date: "Feb 15, 2024",
    category: "Program",
    author: "Emily Johnson",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    readTime: 6,
  },
  {
    id: 4,
    title: "Distinguished Alumni Awards 2024",
    excerpt:
      "Meet the 15 remarkable alumni who have been selected for the 2024 Distinguished Alumni Awards.",
    content:
      "Each year, we celebrate the accomplishments of our most distinguished alumni who have made significant contributions to their fields and communities.",
    date: "Feb 10, 2024",
    category: "Awards",
    author: "David Chen",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    readTime: 7,
  },
  {
    id: 5,
    title: "Alumni Career Fair 2024: A Record Turnout",
    excerpt:
      "150 companies participated in our largest career fair ever, attracting over 2,000 alumni and students.",
    content:
      "The 2024 Alumni Career Fair was our largest event yet, featuring companies from tech, finance, healthcare, and more. It was an excellent opportunity for alumni to mentor students and explore new opportunities.",
    date: "Feb 5, 2024",
    category: "Event",
    author: "Lisa Anderson",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    readTime: 5,
  },
  {
    id: 6,
    title: "Global Alumni Network Expands to 50+ Countries",
    excerpt:
      "Our alumni community now spans across 50+ countries, strengthening our international presence.",
    content:
      "With alumni spread across six continents, we continue to build and strengthen our global network. Regional chapters have been established in major cities to facilitate local connections.",
    date: "Jan 30, 2024",
    category: "Update",
    author: "Michael Johnson",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    readTime: 4,
  },
];

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Alumni News & Updates
            </h1>
            <p className="text-[#A9A9A9] text-lg">
              Stay informed about the latest from our alumni community
            </p>
          </div>

          {/* Featured Article */}
          {newsData.length > 0 && (
            <div className="mb-16">
              <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg overflow-hidden hover:border-[#6464F1] transition-all duration-300 group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative overflow-hidden h-64 md:h-auto">
                    <img
                      src={newsData[0].image}
                      alt={newsData[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="text-[#6464F1]" size={16} />
                        <span className="text-[#6464F1] text-sm font-semibold uppercase">
                          Featured
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#6464F1] transition-colors">
                        {newsData[0].title}
                      </h2>
                      <p className="text-[#A9A9A9] text-lg mb-6 leading-relaxed line-clamp-3">
                        {newsData[0].excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[#A9A9A9] text-sm">
                        <span>{newsData[0].author}</span> ·{" "}
                        <span>{newsData[0].date}</span> ·{" "}
                        <span>{newsData[0].readTime} min read</span>
                      </div>
                      <button
                        onClick={() => setSelectedArticle(newsData[0])}
                        className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200"
                      >
                        Read More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(1).map((article) => (
              <article
                key={article.id}
                className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] overflow-hidden hover:border-[#6464F1] transition-all duration-300 group cursor-pointer flex flex-col"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#6464F1] text-xs font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-[#A9A9A9] text-xs">
                      {article.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#6464F1] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[#A9A9A9] text-sm mb-4 line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[#A9A9A9] text-xs">
                    <span>{article.author}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1E1E1E] rounded-lg border border-[#3A3A3A] max-w-2xl max-h-96 overflow-y-auto">
            <div className="p-8">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-[#A9A9A9] hover:text-white transition-colors mb-4"
              >
                ✕ Close
              </button>
              <span className="text-[#6464F1] text-xs font-semibold uppercase tracking-wide">
                {selectedArticle.category}
              </span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                {selectedArticle.title}
              </h2>
              <div className="text-[#A9A9A9] text-sm mb-6">
                <span>{selectedArticle.author}</span> ·{" "}
                <span>{selectedArticle.date}</span> ·{" "}
                <span>{selectedArticle.readTime} min read</span>
              </div>
              <p className="text-[#A9A9A9] leading-relaxed">
                {selectedArticle.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
