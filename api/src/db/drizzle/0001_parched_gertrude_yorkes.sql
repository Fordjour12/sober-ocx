ALTER TABLE "user" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "password" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;