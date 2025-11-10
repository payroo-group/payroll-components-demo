# Embedded Payroll Demo

This is a demo application showcasing Payroo payroll components for building embedded payroll solutions.
It is built using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/).

> [!WARNING]
Ensure that client side code does not make API calls directly to Payroo services.

## Prerequisites

Read documentation for embedded payroll components at [Payroo Docs](https://docs.payroo.com.au/guide/embedding-payroll-components/getting-started).

You will need:

1. Payroo Partner API credentials.

**Configure Environment Variables**

Create a `.env` file in the root of the project and add your Payroo Partner API credentials:

```sh
cp .env.example .env
```

Then, edit the `.env` file to include your actual credentials:

```env
PAYROO_API_KEY=your_api_key
```

## Customization

Payroll components can be customized using props and styles. Refer to the [Payroo Docs](https://docs.payroo.com.au/guide/embedding-payroll-components/getting-started) for detailed information on available customization options.

CSS Variables can be used to override default styles. For example, to change the primary color, you can add the following CSS to your application:

See [./app/payroll-components.css](./app/payroll-components.css) for an example.

```css
:root {
  --payroo-primary-color: #ff5733; /* Your custom color */
}
```

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.


## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---
