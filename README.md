# Image Service

## Overview
The **Image Service** (written in **Node.js**) handles image uploads, retrievals, and editing. Doctors can **annotate** images by drawing or adding text.

## Features
- Upload and retrieve medical images
- Image annotations (text & drawing)
- Secure API endpoints

## Technologies Used
- **Node.js & Express**
- **Multer (file handling)**
- **MongoDB (for image metadata)**
- **Docker & Kubernetes**

## Installation & Setup
```sh
git clone https://github.com/yourusername/image-service.git
cd image-service
npm install
docker build -t image-service .
docker run -p 8086:8086 image-service
Other Services
Integrated with Patient Service to link images to patients.
```

## Other Services
- Integrated with Patient Service to link images to patients.
