# Use a minimal NGINX image
FROM nginx:alpine

# Remove default NGINX static content
RUN rm -rf /usr/share/nginx/html/*

# Copy your app files into NGINX's web root
COPY . /usr/share/nginx/html

# Expose port 80 (used by NGINX)
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
