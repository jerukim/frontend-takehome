.PHONY: init-frontend
init-frontend:  ## Install frontend dependencies
	cd frontend; npm install

.PHONY: init-backend
init-backend:  ## Install backend dependencies
	cd backend; npm install

.PHONY: start-frontend-dev
start-frontend-dev: ## Start frontend dev server
	cd frontend; npm run dev

.PHONY: start-backend-dev
start-backend-dev: ## Start backend dev server
	cd backend; node server.js

.PHONY: start-dev
start-dev: ## Start dev environments
	make -j 2 start-backend-dev start-frontend-dev

.PHONY: build-frontend
build-frontend: ## Build prod frontend
	cd frontend; npm run build

.PHONY: start-frontend-prod
start-frontend-prod: ## Preview frontend prod build
	cd frontend; npm run preview

.PHONY: up
up: ## Install front and back end dependencies in parallel
	make -j 2 init-frontend init-backend
	make build-frontend

.PHONY: start
start: ## Start prod environments
	make -j 2 start-backend-dev start-frontend-prod

