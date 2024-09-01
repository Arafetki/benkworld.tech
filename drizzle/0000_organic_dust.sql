CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(256) NOT NULL,
	`author` text(256) DEFAULT 'Arafet BenKilani' NOT NULL,
	`content` text DEFAULT '' NOT NULL,
	`tags` text NOT NULL,
	`is_published` integer DEFAULT true NOT NULL,
	`created` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated` text
);
--> statement-breakpoint
CREATE INDEX `title_idx` ON `posts` (`title`);