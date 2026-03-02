# STAGE 1: Build the application
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .

# Use = sign to resolve legacy format warnings
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_FONT_GOOGLE_MOCKED=1

# Build the standalone Next.js app
RUN npm run build

# STAGE 2: Run the application
FROM node:22-alpine AS runner
WORKDIR /app

# Use = sign to resolve legacy format warnings
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy standalone output from the builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Corrected ENV syntax for the port
EXPOSE 3000
ENV PORT=3000

# Start the server
CMD ["node", "server.js"]