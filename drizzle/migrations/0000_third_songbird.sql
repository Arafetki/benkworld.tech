CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" varchar(500) NOT NULL,
	"author" varchar(256) DEFAULT 'Arafet BenKilani' NOT NULL,
	"content" text DEFAULT '' NOT NULL,
	"tags" text[] DEFAULT '{}'::text[] NOT NULL,
	"thumbnail_url" varchar(1024),
	"is_published" boolean DEFAULT true NOT NULL,
	"created" timestamp DEFAULT now() NOT NULL,
	"updated" timestamp
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "posts" USING btree ("title");