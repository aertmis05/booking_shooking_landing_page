import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Europe You Must Visit",
    excerpt: "Discover lesser-known destinations across Europe that offer authentic experiences away from crowded tourist spots.",
    category: "Travel Guide",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "Complete Guide to Packing for Long-Term Travel",
    excerpt: "Master the art of packing smart with our comprehensive guide to traveling light without compromising comfort.",
    category: "Travel Tips",
    author: "Michael Chen",
    date: "March 12, 2025",
    readTime: "7 min read",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    title: "Best Time to Visit Southeast Asia",
    excerpt: "Plan your Southeast Asian adventure with our detailed guide on weather, festivals, and peak seasons.",
    category: "Destination Guide",
    author: "Priya Sharma",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    title: "Budget Travel Hacks: Travel More for Less",
    excerpt: "Learn insider tips and tricks to stretch your travel budget and experience luxury without breaking the bank.",
    category: "Travel Tips",
    author: "David Martinez",
    date: "March 8, 2025",
    readTime: "5 min read",
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    id: 5,
    title: "Cultural Etiquette: Traveling Respectfully",
    excerpt: "Essential guide to understanding and respecting local customs and traditions in different cultures.",
    category: "Travel Guide",
    author: "Emma Wilson",
    date: "March 5, 2025",
    readTime: "8 min read",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    id: 6,
    title: "Adventure Travel: Thrilling Experiences Worldwide",
    excerpt: "From skydiving to mountaineering, explore the world's most exhilarating adventure destinations.",
    category: "Adventure",
    author: "James Thompson",
    date: "March 1, 2025",
    readTime: "6 min read",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];

const categories = [
  "All",
  "Travel Tips",
  "Destination Guide",
  "Travel Guide",
  "Adventure",
];

export function BlogSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Travel Insights & Guides
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Expert tips, destination guides, and travel inspiration to help you plan your perfect journey
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                category === "All"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
              data-testid={`filter-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover-elevate active-elevate-2">
                {/* Image */}
                <div
                  className="relative h-48 overflow-hidden bg-gradient-to-br"
                  style={{ background: post.image }}
                >
                  <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />
                  <Badge className="absolute right-4 top-4 bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader className="pb-3">
                  <h3 className="line-clamp-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="pb-4">
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>

                {/* Meta */}
                <CardFooter className="flex flex-col gap-4 border-t border-border/50 pt-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-accent">
                      {post.readTime}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-primary hover:bg-primary/10"
                      data-testid={`button-read-post-${post.id}`}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="button-view-all-posts"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
