DO $$ BEGIN
 CREATE TYPE "public"."level" AS ENUM('beginner', 'intermediate', 'advanced');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "author" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "tags" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "level" "level" DEFAULT 'beginner' NOT NULL;