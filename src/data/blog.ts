export interface BlogCodeBlock {
  language: string;
  value: string;
}

export interface BlogSection {
  heading: string;
  content: string;
  code?: BlogCodeBlock;
}

export interface BlogArticle {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  date: string;
  readingTime: string;
  sections: BlogSection[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "mcp-connecter-ia-outils-reels",
    title: "MCP : connecting AI to real-world tools",
    tags: ["IA", "MCP", "Automation"],
    summary:
      "The Model Context Protocol lets AI assistants connect to tools, files, APIs and databases in a structured way.",
    date: "2025-06-01",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Why MCP matters",
        content:
          "Language models like Claude or GPT are powerful but isolated. They cannot access your local files, internal APIs or databases without a structured bridge. MCP (Model Context Protocol) is that bridge. It defines a standardised protocol letting an LLM discover and use tools in a safe, predictable way.",
      },
      {
        heading: "A concrete use case",
        content:
          "Imagine an AI assistant embedded in your IDE that can read your code, create Jira tickets, query your database or trigger CI pipelines. All of this becomes possible with MCP servers that expose these capabilities as declared tools.",
      },
      {
        heading: "Simplified architecture",
        content:
          "An MCP server exposes tools (callable functions), resources (readable data) and prompts (reusable templates). The MCP client (the AI assistant) discovers these capabilities via a handshake and calls them on demand. Communication goes through stdio or SSE.",
      },
      {
        heading: "TypeScript configuration example",
        content: "Here is how to declare a minimal MCP server exposing a project-reading tool:",
        code: {
          language: "typescript",
          value: `const server = new McpServer({
  name: "portfolio-tools",
  version: "1.0.0",
});

server.tool("getProjects", async () => {
  return {
    content: [
      {
        type: "text",
        text: "Available projects list",
      },
    ],
  };
});`,
        },
      },
    ],
  },
  {
    slug: "rag-memoire-documentaire-ia",
    title: "RAG: giving an AI documentary memory",
    tags: ["IA", "RAG", "Vector Database"],
    summary:
      "RAG lets an AI answer questions from real documents rather than being limited to its internal knowledge.",
    date: "2025-05-15",
    readingTime: "5 min read",
    sections: [
      {
        heading: "The problem of approximate answers",
        content:
          "An LLM has a knowledge cut-off date and knows nothing about your internal documents. Result: it hallucinates or answers generically. RAG (Retrieval-Augmented Generation) solves this by injecting relevant document excerpts into the model's context, retrieved in real time.",
      },
      {
        heading: "The role of embeddings",
        content:
          "An embedding is a vector representation of text in a high-dimensional space. Semantically close texts have close vectors. We encode each document and each user query as vectors, then search for the documents closest to the query.",
      },
      {
        heading: "Vector search",
        content:
          "Vector databases like Pinecone, Weaviate or pgvector store millions of vectors and perform similarity searches in milliseconds. That is the engine behind the documentary memory of a RAG system.",
      },
      {
        heading: "RAG pipeline example",
        content: "A simplified semantic search in a vector database:",
        code: {
          language: "typescript",
          value: `async function searchDocuments(query: string) {
  const embedding = await createEmbedding(query);

  const results = await vectorDatabase.search({
    vector: embedding,
    topK: 5,
  });

  return results.map((doc) => doc.content);
}`,
        },
      },
    ],
  },
  {
    slug: "performance-frontend-ecommerce",
    title: "Why frontend performance matters in e-commerce",
    tags: ["E-commerce", "Front-end", "Performance"],
    summary:
      "In e-commerce, a few seconds of loading time can be enough to lose a user.",
    date: "2025-04-20",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Performance and conversion",
        content:
          "Amazon and Google studies show that one extra second of latency can reduce conversions by 7%. On mobile, users abandon a page that takes more than 3 seconds to load. In e-commerce, performance is not a technical luxury — it is a direct business lever.",
      },
      {
        heading: "Core Web Vitals",
        content:
          "Google measures experience quality via Core Web Vitals: LCP (Largest Contentful Paint) for loading, FID/INP for interactivity and CLS for visual stability. These metrics directly influence SEO and user satisfaction.",
      },
      {
        heading: "Images, bundle and rendering",
        content:
          "Main causes of slowness: unoptimised images, oversized JavaScript bundle, excessive client-side rendering and lack of caching. Next.js offers native solutions: optimised Image component, automatic code splitting, SSR/ISR and the App Router with Server Components.",
      },
      {
        heading: "Next.js optimisation example",
        content: "The Next.js Image component automatically handles resizing, compression and lazy loading:",
        code: {
          language: "tsx",
          value: `import Image from "next/image";

export function ProductImage() {
  return (
    <Image
      src="/product.webp"
      alt="Product"
      width={600}
      height={600}
      priority
    />
  );
}`,
        },
      },
    ],
  },
  {
    slug: "integration-paiement-application-web",
    title: "Integrating payments into a web application",
    tags: ["Paiement", "Stripe", "E-commerce"],
    summary:
      "A payment integration is more than displaying a pay button: you need to handle statuses, errors and security.",
    date: "2025-03-10",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Payment on the user side",
        content:
          "The client experience must be smooth: a clear form, real-time feedback, card error handling and a clean redirect. Stripe Elements or Checkout handle the sensitive part (card numbers) without your servers ever touching raw banking data.",
      },
      {
        heading: "Webhooks",
        content:
          "The real challenge of a payment integration is server-side. Stripe notifies your backend via webhooks when an event occurs: successful payment, refund, dispute. You need to listen, validate the signature and update the order state idempotently.",
      },
      {
        heading: "Order statuses",
        content:
          "An order goes through several states: pending, processing, paid, failed, refunded. Modelling these transitions clearly in your database is essential to avoid ghost orders or double shipments.",
      },
      {
        heading: "Security and traceability",
        content:
          "Always validate the webhook signature, log every event and make your handlers idempotent. In case of a Stripe retry, the same event must not trigger the same action twice.",
        code: {
          language: "typescript",
          value: `app.post("/webhook", async (req, res) => {
  const event = req.body;

  if (event.type === "checkout.session.completed") {
    await updateOrderStatus(event.data.object.id, "paid");
  }

  res.status(200).json({ received: true });
});`,
        },
      },
    ],
  },
  {
    slug: "apprentissage-plateformes-b2b",
    title: "What I learnt about B2B platforms",
    tags: ["B2B", "Produit", "Full Stack"],
    summary:
      "B2B platforms require special attention to roles, permissions, workflows and business needs.",
    date: "2025-02-05",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Understanding business users",
        content:
          "In B2B, users are not average consumers. They are buyers, team managers or administrators with precise business constraints: budgets, approval processes, custom catalogues. Understanding their workflows before coding is essential.",
      },
      {
        heading: "Managing roles and permissions",
        content:
          "A well-designed role system is the backbone of a B2B platform. Every feature must be conditional on the user's role. A manager can approve an order; a simple user can only create a cart. These rules must be centralised and tested.",
      },
      {
        heading: "Data reliability",
        content:
          "In B2B, a pricing error, incorrect stock or lost order has contractual consequences. Data reliability is non-negotiable. This requires rigorous database transactions, server-side validation and reconciliation mechanisms.",
      },
      {
        heading: "The importance of documentation",
        content:
          "B2B platforms are often maintained by multiple teams. Up-to-date documentation of business rules, data flows and APIs is an investment that saves weeks of debugging.",
        code: {
          language: "typescript",
          value: `type Role = "admin" | "manager" | "user";

function canAccessDashboard(role: Role) {
  return role === "admin" || role === "manager";
}`,
        },
      },
    ],
  },
  {
    slug: "kafka-event-driven-architecture",
    title: "Kafka: building event-driven architectures",
    tags: ["Kafka", "Java", "Full Stack"],
    summary:
      "Apache Kafka enables decoupled, scalable and resilient communication between microservices through event streaming.",
    date: "2025-07-01",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Why event-driven?",
        content:
          "In a traditional REST architecture, services call each other directly. This creates tight coupling: if the order service is down, the payment service fails too. Event-driven architecture breaks this dependency. Services emit events to Kafka topics and consume them independently.",
      },
      {
        heading: "Kafka concepts in brief",
        content:
          "Kafka organises messages in topics. Producers write events, consumers read them. A consumer group ensures each message is processed once per group. Kafka retains messages for a configurable duration, enabling replay and fault recovery.",
      },
      {
        heading: "Use case: marketplace order flow",
        content:
          "In Mboka Market, when a buyer confirms an order, the order service emits an `order.created` event to Kafka. The payment service, notification service and inventory service each consume this event independently. No service blocks another.",
      },
      {
        heading: "Spring Boot Kafka producer example",
        content: "Producing an event from a Spring Boot service:",
        code: {
          language: "java",
          value: `@Service
public class OrderEventProducer {

    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;

    public void sendOrderCreated(OrderEvent event) {
        kafkaTemplate.send("order.created", event.getOrderId(), event);
    }
}`,
        },
      },
    ],
  },
  {
    slug: "redis-caching-strategies",
    title: "Redis: caching strategies for fast applications",
    tags: ["Redis", "Performance", "Full Stack"],
    summary:
      "Redis is more than a cache — it is a versatile in-memory data store that powers sessions, queues and real-time features.",
    date: "2025-06-15",
    readingTime: "5 min read",
    sections: [
      {
        heading: "What Redis is good at",
        content:
          "Redis excels at low-latency data access. Typical uses: session storage, rate limiting, distributed locks, pub/sub messaging, leaderboards and write-through caching in front of a relational database.",
      },
      {
        heading: "Cache-aside pattern",
        content:
          "The most common caching pattern: the application checks Redis first. On a cache miss, it queries the database, stores the result in Redis with a TTL, then returns the data. On subsequent requests, Redis serves the response without hitting the database.",
      },
      {
        heading: "Practical example: product catalogue",
        content:
          "In an e-commerce context, product catalogues are read far more than they are written. Caching them in Redis dramatically reduces database load during peak traffic.",
      },
      {
        heading: "Node.js caching example",
        content: "Cache-aside implementation with ioredis:",
        code: {
          language: "typescript",
          value: `async function getProduct(id: string) {
  const cached = await redis.get(\`product:\${id}\`);
  if (cached) return JSON.parse(cached);

  const product = await db.products.findUnique({ where: { id } });
  await redis.setex(\`product:\${id}\`, 3600, JSON.stringify(product));

  return product;
}`,
        },
      },
    ],
  },
  {
    slug: "algolia-search-ecommerce",
    title: "Algolia: instant search for e-commerce",
    tags: ["Algolia", "E-commerce", "Front-end"],
    summary:
      "Algolia provides sub-100ms search results with typo tolerance, faceting and ranking — a must-have for e-commerce catalogues.",
    date: "2025-05-01",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Why traditional search falls short",
        content:
          "SQL LIKE queries are slow on large datasets and provide no relevance ranking, typo tolerance or faceting. Algolia solves all of this out of the box. It indexes your data and serves results in under 100ms, globally distributed.",
      },
      {
        heading: "Key features for e-commerce",
        content:
          "Algolia supports faceted navigation (filter by brand, price, category), custom ranking rules (promote in-stock items), query suggestions and geo-search. These features are critical for a smooth product discovery experience.",
      },
      {
        heading: "Indexing your catalogue",
        content:
          "Products are sent to Algolia as JSON objects. Each object becomes searchable immediately after indexing. You control which fields are searchable, filterable and sortable.",
      },
      {
        heading: "React InstantSearch example",
        content: "Minimal search UI with InstantSearch:",
        code: {
          language: "tsx",
          value: `import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";

const client = algoliasearch("APP_ID", "SEARCH_KEY");

export function ProductSearch() {
  return (
    <InstantSearch indexName="products" searchClient={client}>
      <SearchBox placeholder="Search products..." />
      <Hits hitComponent={ProductHit} />
    </InstantSearch>
  );
}`,
        },
      },
    ],
  },
  {
    slug: "spring-boot-rest-api",
    title: "Building REST APIs with Spring Boot",
    tags: ["Java", "Spring Boot", "Full Stack"],
    summary:
      "Spring Boot makes it straightforward to build production-ready REST APIs in Java with minimal configuration.",
    date: "2025-04-05",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Why Spring Boot?",
        content:
          "Spring Boot takes the heavy configuration of Spring Framework and provides opinionated defaults. You get dependency injection, JPA, security, validation and monitoring out of the box — letting you focus on business logic.",
      },
      {
        heading: "Project structure",
        content:
          "A typical Spring Boot REST API follows a layered architecture: Controller (handles HTTP), Service (business logic), Repository (data access). This separation makes the codebase testable and maintainable.",
      },
      {
        heading: "Exception handling",
        content:
          "Spring Boot provides `@ControllerAdvice` for centralised exception handling. Instead of scattering try-catch blocks, you declare handlers that map exceptions to HTTP responses globally.",
      },
      {
        heading: "REST controller example",
        content: "A minimal product controller with CRUD operations:",
        code: {
          language: "java",
          value: `@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        return ResponseEntity.ok(productService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody @Valid ProductDto dto) {
        return ResponseEntity.status(201).body(productService.create(dto));
    }
}`,
        },
      },
    ],
  },
  {
    slug: "marketplace-architecture",
    title: "Architecture of a modern marketplace",
    tags: ["Marketplace", "Full Stack", "Java"],
    summary:
      "Building a marketplace goes beyond a simple e-commerce store — it requires multi-tenant data, seller workflows and reliable payment splitting.",
    date: "2025-07-10",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Marketplace vs e-commerce",
        content:
          "A marketplace connects buyers and sellers on a single platform. Unlike a standard e-commerce store, you manage multiple sellers, each with their own products, orders and payouts. This adds significant complexity to data modelling, permissions and financial flows.",
      },
      {
        heading: "Multi-tenant data model",
        content:
          "Each seller is a tenant. Products, orders and reviews belong to a seller context. The data model must enforce isolation: seller A must never see seller B's private data. Row-level security in PostgreSQL is a powerful tool for this.",
      },
      {
        heading: "Seller onboarding and KYC",
        content:
          "Before a seller can list products, they go through verification (KYC). Stripe Connect handles this well: sellers create connected accounts, upload documents and get approved. Once approved, payments flow through the platform and Stripe splits payouts automatically.",
      },
      {
        heading: "Domain event example",
        content: "Emitting a seller-approved event after verification:",
        code: {
          language: "typescript",
          value: `interface SellerApprovedEvent {
  sellerId: string;
  approvedAt: Date;
  stripeAccountId: string;
}

async function handleSellerApproved(event: SellerApprovedEvent) {
  await db.sellers.update({
    where: { id: event.sellerId },
    data: { status: "active", stripeAccountId: event.stripeAccountId },
  });

  await notificationService.sendWelcomeEmail(event.sellerId);
}`,
        },
      },
    ],
  },
];
