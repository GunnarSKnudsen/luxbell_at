# Deploy LUXbell to Cloud Run

## Prerequisites

- Google Cloud project with billing enabled
- [gcloud CLI](https://cloud.google.com/sdk/docs/install) installed and logged in (`gcloud auth login`)
- Docker (optional; only if building image locally)

## Deploy from source (recommended)

The project includes an **explicit Dockerfile** so gcloud uses a container build (no language/framework detection). From the project root (`luxbell_website/`), run:

```bash
gcloud run deploy luxbell-website \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 8080
```

- Cloud Build will use the `Dockerfile` in the current directory to build the image and deploy to Cloud Run.
- Replace `europe-west1` with your preferred region (e.g. `us-central1`).
- After deployment, the CLI prints the service URL (e.g. `https://luxbell-website-xxxxx-ew.a.run.app`).

## Deploy a pre-built image

If you build the image yourself (e.g. for a different registry):

```bash
# Build
docker build -t luxbell-website .

# Tag for your registry (Artifact Registry or Container Registry)
docker tag luxbell-website REGION-docker.pkg.dev/PROJECT_ID/REPO/luxbell-website:latest

# Push
docker push REGION-docker.pkg.dev/PROJECT_ID/REPO/luxbell-website:latest

# Deploy
gcloud run deploy luxbell-website \
  --image REGION-docker.pkg.dev/PROJECT_ID/REPO/luxbell-website:latest \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 8080
```

## One-liner (copy-paste)

```bash
gcloud run deploy luxbell-website --source . --region europe-west1 --allow-unauthenticated --port 8080
```
