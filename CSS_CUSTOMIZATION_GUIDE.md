# CSS Variables Customization Guide

This guide provides a comprehensive reference for all CSS variables used in the Payroll Components Demo application. Customize these variables to match your brand and design requirements.

## Table of Contents

1. [Application Theme Variables](#application-theme-variables)
2. [Payroll Components Variables](#payroll-components-variables)
3. [Quick Start](#quick-start)
4. [Customization Examples](#customization-examples)

---

## Application Theme Variables

These variables control the overall appearance of the application UI and are defined in `app/app.css`.

### Base Configuration

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--radius` | `0.65rem` | Base border radius for components |

### Calculated Radius Values

| Variable | Formula | Description |
|----------|---------|-------------|
| `--radius-sm` | `calc(var(--radius) - 4px)` | Small border radius |
| `--radius-md` | `calc(var(--radius) - 2px)` | Medium border radius |
| `--radius-lg` | `var(--radius)` | Large border radius |
| `--radius-xl` | `calc(var(--radius) + 4px)` | Extra large border radius |

### Color Variables (Light Mode)

#### Primary Colors

| Variable | Value | Description |
|----------|-------|-------------|
| `--background` | `oklch(1 0 0)` | Main background color (white) |
| `--foreground` | `oklch(0.141 0.005 285.823)` | Main text color (dark) |
| `--primary` | `oklch(0.541 0.281 293.009)` | Primary brand color (purple) |
| `--primary-foreground` | `oklch(0.969 0.016 293.756)` | Text on primary background |

#### Secondary & Accent Colors

| Variable | Value | Description |
|----------|-------|-------------|
| `--secondary` | `oklch(0.967 0.001 286.375)` | Secondary color (light gray) |
| `--secondary-foreground` | `oklch(0.21 0.006 285.885)` | Text on secondary background |
| `--accent` | `oklch(0.967 0.001 286.375)` | Accent color (light gray) |
| `--accent-foreground` | `oklch(0.21 0.006 285.885)` | Text on accent background |
| `--muted` | `oklch(0.967 0.001 286.375)` | Muted elements color |
| `--muted-foreground` | `oklch(0.552 0.016 285.938)` | Muted text color |

#### Card & Popover Colors

| Variable | Value | Description |
|----------|-------|-------------|
| `--card` | `oklch(1 0 0)` | Card background (white) |
| `--card-foreground` | `oklch(0.141 0.005 285.823)` | Card text color |
| `--popover` | `oklch(1 0 0)` | Popover background (white) |
| `--popover-foreground` | `oklch(0.141 0.005 285.823)` | Popover text color |

#### State Colors

| Variable | Value | Description |
|----------|-------|-------------|
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error/destructive color (red/orange) |
| `--border` | `oklch(0.92 0.004 286.32)` | Border color |
| `--input` | `oklch(0.92 0.004 286.32)` | Input border color |
| `--ring` | `oklch(0.702 0.183 293.541)` | Focus ring color (purple) |

#### Chart Colors

| Variable | Value | Description |
|----------|-------|-------------|
| `--chart-1` | `oklch(0.811 0.111 293.571)` | Chart color 1 (lightest purple) |
| `--chart-2` | `oklch(0.606 0.25 292.717)` | Chart color 2 |
| `--chart-3` | `oklch(0.541 0.281 293.009)` | Chart color 3 |
| `--chart-4` | `oklch(0.491 0.27 292.581)` | Chart color 4 |
| `--chart-5` | `oklch(0.432 0.232 292.759)` | Chart color 5 (darkest purple) |

#### Sidebar Colors

| Variable | Value | Description |
|----------|-------|-------------|
| `--sidebar` | `oklch(0.985 0 0)` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.141 0.005 285.823)` | Sidebar text color |
| `--sidebar-primary` | `oklch(0.541 0.281 293.009)` | Sidebar primary color |
| `--sidebar-primary-foreground` | `oklch(0.969 0.016 293.756)` | Text on sidebar primary |
| `--sidebar-accent` | `oklch(0.967 0.001 286.375)` | Sidebar accent color |
| `--sidebar-accent-foreground` | `oklch(0.21 0.006 285.885)` | Text on sidebar accent |
| `--sidebar-border` | `oklch(0.92 0.004 286.32)` | Sidebar border color |
| `--sidebar-ring` | `oklch(0.702 0.183 293.541)` | Sidebar focus ring |

### Color Variables (Dark Mode)

Dark mode is automatically applied when the `.dark` class is present on the HTML element.

| Variable | Light Mode | Dark Mode |
|----------|------------|-----------|
| `--background` | `oklch(1 0 0)` | `oklch(0.1822 0 0)` |
| `--foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` |
| `--card` | `oklch(1 0 0)` | `oklch(0.21 0.006 285.885)` |
| `--card-foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` |
| `--popover` | `oklch(1 0 0)` | `oklch(0.21 0.006 285.885)` |
| `--popover-foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` |
| `--primary` | `oklch(0.541 0.281 293.009)` | `oklch(0.606 0.25 292.717)` |
| `--secondary` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` |
| `--muted` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` |
| `--accent` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` |
| `--border` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` |
| `--input` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 15%)` |
| `--ring` | `oklch(0.702 0.183 293.541)` | `oklch(0.38 0.189 293.745)` |

---

## Payroll Components Variables

These variables specifically customize the Payroo payroll components and are defined in `app/payroll-components.css`.

### Custom Override Variables

Define these in `app/payroll-components.css`:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--payroo-primary` | `#7f22fe` | Primary color for payroll components |
| `--payroo-space-sm` | `4px` | Small spacing |
| `--payroo-space-md` | `8px` | Medium spacing |
| `--payroo-space-lg` | `14px` | Large spacing |
| `--payroo-space-xl` | `28px` | Extra large spacing |
| `--payroo-radius-sm` | `calc(var(--radius) - 6px)` | Small border radius |
| `--payroo-radius-md` | `calc(var(--radius) - 4px)` | Medium border radius |
| `--payroo-button-radius` | `calc(var(--radius) - 2px)` | Button border radius |

### Payroll Components Library Variables

These are provided by the `@payroo-group/payroll-components` library. Override them in your CSS:

#### Brand Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--payroo-green` | `#00a258` | Success/brand green |
| `--payroo-green-dark` | `#00914f` | Dark green variant |
| `--payroo-green-light` | `#f2faf6` | Light green background |
| `--payroo-primary` | `#000` | Primary color (black) |
| `--payroo-secondary` | `#2196f3` | Secondary color (blue) |
| `--payroo-white` | `#fff` | White color |

#### Gray Scale

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--payroo-gray-50` | `#fafafa` | Lightest gray |
| `--payroo-gray-100` | `#f2f2f2` | Very light gray |
| `--payroo-gray-200` | `#e5e5e5` | Light gray |
| `--payroo-gray-300` | `#ccc` | Medium light gray |
| `--payroo-gray-400` | `#a6a6a6` | Medium gray |
| `--payroo-gray-500` | `#a8a8a8` | Medium dark gray |
| `--payroo-gray-600` | `gray` | Dark gray |
| `--payroo-gray-700` | `#cccccc29` | Darkest gray (with transparency) |

#### Semantic Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--payroo-bg-color` | `var(--payroo-white)` | Background color |
| `--payroo-disabled` | `var(--payroo-gray-200)` | Disabled state color |
| `--payroo-placeholder` | `var(--payroo-gray-400)` | Placeholder text color |
| `--payroo-accent-light` | `var(--payroo-green-light)` | Light accent color |
| `--payroo-error` | `#ff2725` | Error state color |
| `--payroo-success` | `var(--payroo-green)` | Success state color |
| `--payroo-info` | `#0099fa` | Info state color |
| `--payroo-warning` | `#ff9100` | Warning state color |

#### Text Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--payroo-text` | `#222` | Primary text color |
| `--payroo-text-body` | `#333` | Body text color |
| `--payroo-text-light` | `gray` | Light/secondary text |

#### Typography

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--payroo-font-size-sm` | `12px` | Small font size |
| `--payroo-font-size-md` | `14px` | Medium font size |
| `--payroo-font-size-lg` | `18px` | Large font size |
| `--payroo-font-size-xl` | `20px` | Extra large font size |
| `--payroo-font-size-xxl` | `24px` | XX large font size |
| `--payroo-line-height-sm` | `16px` | Small line height |
| `--payroo-line-height-md` | `20px` | Medium line height |
| `--payroo-line-height-lg` | `26px` | Large line height |
| `--payroo-line-height-xl` | `34px` | Extra large line height |
| `--payroo-font-weight-normal` | `400` | Normal font weight |
| `--payroo-font-weight-medium` | `500` | Medium font weight |
| `--payroo-font-weight-bold` | `700` | Bold font weight |
| `--payroo-font-family-normal` | `system-ui, -apple-system, BlinkMacSystemFont, sans-serif, Inter` | Font family |

#### Spacing System

**Space Variables:**

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--payroo-space-xs` | `6px` | Extra small space |
| `--payroo-space-sm` | `8px` | Small space |
| `--payroo-space-md` | `12px` | Medium space |
| `--payroo-space-lg` | `24px` | Large space |
| `--payroo-space-xl` | `48px` | Extra large space |

**Gap Variables:**

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--payroo-gap-xs` | `2px` | Extra small gap |
| `--payroo-gap-sm` | `4px` | Small gap |
| `--payroo-gap-md` | `8px` | Medium gap |
| `--payroo-gap-lg` | `16px` | Large gap |
| `--payroo-gap-xl` | `24px` | Extra large gap |

**Margin Variables:**

| Variable | Default Value |
|----------|---------------|
| `--payroo-margin-0` | `0px` |
| `--payroo-margin-2` | `2px` |
| `--payroo-margin-4` | `4px` |
| `--payroo-margin-8` | `8px` |
| `--payroo-margin-16` | `16px` |
| `--payroo-margin-30` | `30px` |
| `--payroo-margin-32` | `32px` |

**Padding Variables:**

| Variable | Default Value |
|----------|---------------|
| `--payroo-padding-none` | `0px` |
| `--payroo-padding-xs` | `4px` |
| `--payroo-padding-sm` | `8px` |
| `--payroo-padding-md` | `12px` |
| `--payroo-padding-lg` | `16px` |
| `--payroo-padding-xl` | `24px` |
| `--payroo-padding-xxl` | `48px` |
| `--payroo-padding-5` | `5px` |
| `--payroo-padding-9` | `9px` |
| `--payroo-padding-10` | `10px` |
| `--payroo-padding-14` | `14px` |
| `--payroo-padding-22` | `22px` |
| `--payroo-padding-25` | `25px` |
| `--payroo-padding-60` | `60px` |

**Border Radius Variables:**

| Variable | Default Value |
|----------|---------------|
| `--payroo-radius-xs` | `2px` |
| `--payroo-radius-sm` | `4px` |
| `--payroo-radius-md` | `8px` |
| `--payroo-radius-lg` | `12px` |
| `--payroo-radius-xl` | `24px` |

#### Border System

**Border Width:**

| Variable | Default Value |
|----------|---------------|
| `--payroo-border-width-thin` | `1px` |
| `--payroo-border-width-medium` | `2px` |
| `--payroo-border-width-thick` | `3px` |

**Border Style:**

| Variable | Default Value |
|----------|---------------|
| `--payroo-border-style-solid` | `solid` |
| `--payroo-border-style-dashed` | `dashed` |
| `--payroo-border-style-dotted` | `dotted` |

**Border Colors:**

| Variable | Default Value |
|----------|---------------|
| `--payroo-border-color` | `var(--payroo-gray-200)` |
| `--payroo-border-color-light` | `var(--payroo-gray-100)` |
| `--payroo-border-color-dark` | `var(--payroo-gray-300)` |
| `--payroo-border-color-primary` | `var(--payroo-primary)` |
| `--payroo-border-color-secondary` | `var(--payroo-secondary)` |
| `--payroo-border-color-success` | `var(--payroo-success)` |
| `--payroo-border-color-error` | `var(--payroo-error)` |
| `--payroo-border-color-warning` | `var(--payroo-warning)` |
| `--payroo-border-color-info` | `var(--payroo-info)` |

---

## Quick Start

### 1. Understanding the CSS Architecture

The application uses three layers of CSS:

1. **External Payroll Components Library** (`@payroo-group/payroll-components/dist/index.css`)
   - Base styles from the payroll components package
   - Loaded first in `app/root.tsx`

2. **Application Theme** (`app/app.css`)
   - Tailwind CSS v4 configuration
   - Main theme colors and variables
   - Uses OKLCH color space for better color consistency

3. **Custom Overrides** (`app/payroll-components.css`)
   - Your custom modifications
   - Overrides payroll components defaults
   - Loaded last to have highest priority

### 2. Where to Add Your Customizations

Add your custom CSS variable overrides in `app/payroll-components.css`:

```css
:root {
    /* Override application theme variables */
    --radius: 0.5rem;
    --primary: oklch(0.5 0.3 250);

    /* Override payroll component variables */
    --payroo-primary: #your-brand-color;
    --payroo-radius-md: 8px;
}
```

### 3. Import Order (Already Configured)

The CSS files are imported in the correct order in `app/root.tsx`:

```typescript
import "@payroo-group/payroll-components/styles.css";  // 1. Library defaults
import "./app.css";                                     // 2. App theme
import "./payroll-components.css";                      // 3. Your overrides
```

---

## Customization Examples

### Example 1: Change Primary Brand Color

To change the primary color throughout the application:

```css
/* app/payroll-components.css */
:root {
    /* Change app primary color (OKLCH format) */
    --primary: oklch(0.55 0.25 220);  /* Blue theme */

    /* Change payroll components primary color */
    --payroo-primary: #1a73e8;
}
```

### Example 2: Adjust Border Radius

To make all components more or less rounded:

```css
/* app/payroll-components.css */
:root {
    /* More rounded */
    --radius: 1rem;

    /* Or less rounded */
    --radius: 0.25rem;

    /* Or completely square */
    --radius: 0;
}
```

### Example 3: Customize Spacing

To adjust spacing throughout the payroll components:

```css
/* app/payroll-components.css */
:root {
    --payroo-space-sm: 6px;   /* Increase from 4px */
    --payroo-space-md: 12px;  /* Increase from 8px */
    --payroo-space-lg: 18px;  /* Increase from 14px */
    --payroo-space-xl: 36px;  /* Increase from 28px */
}
```

### Example 4: Custom Dark Mode Colors

Customize dark mode appearance:

```css
/* app/payroll-components.css */
.dark {
    --background: oklch(0.15 0 0);  /* Slightly lighter dark background */
    --primary: oklch(0.65 0.28 250); /* Brighter blue in dark mode */
}
```

### Example 5: Brand Color Palette

Complete brand color customization:

```css
/* app/payroll-components.css */
:root {
    /* Application colors */
    --primary: oklch(0.45 0.31 275);              /* Deep purple */
    --secondary: oklch(0.65 0.24 285);            /* Light purple */
    --accent: oklch(0.75 0.15 180);               /* Teal */

    /* Payroll component colors */
    --payroo-primary: #5e35b1;                    /* Match primary */
    --payroo-secondary: #9575cd;                  /* Match secondary */
    --payroo-success: #00bfa5;                    /* Teal success */
    --payroo-error: #ff5252;                      /* Red error */
    --payroo-warning: #ffc107;                    /* Amber warning */
    --payroo-info: #40c4ff;                       /* Light blue info */
}
```

### Example 6: Typography Customization

Adjust font sizes and weights:

```css
/* app/payroll-components.css */
:root {
    --payroo-font-size-sm: 11px;   /* Smaller */
    --payroo-font-size-md: 15px;   /* Larger */
    --payroo-font-size-lg: 19px;   /* Larger */

    --payroo-font-weight-normal: 300;  /* Lighter */
    --payroo-font-weight-medium: 400;  /* Lighter */
    --payroo-font-weight-bold: 600;    /* Lighter */
}
```

### Example 7: Target Specific Components

Customize specific payroll components using CSS selectors:

```css
/* app/payroll-components.css */

/* Customize company overview component */
#company-overview-container h1 {
    color: var(--payroo-primary);
    font-size: 28px;
}

#company-overview-container button[data-variant="outline"] {
    border-color: var(--payroo-primary);
    color: var(--payroo-primary);
}

/* Customize calendar component */
.calendar {
    --payroo-accent-light: #f0f9ff;  /* Light blue accent */
}
```

### Example 8: Using OKLCH Color Space

OKLCH provides perceptually uniform colors. Format: `oklch(lightness chroma hue)`

- **Lightness**: 0 (black) to 1 (white)
- **Chroma**: 0 (gray) to ~0.4 (vivid)
- **Hue**: 0-360 degrees

```css
:root {
    /* Red */
    --primary: oklch(0.55 0.22 25);

    /* Green */
    --primary: oklch(0.55 0.22 145);

    /* Blue */
    --primary: oklch(0.55 0.22 250);

    /* Purple */
    --primary: oklch(0.55 0.22 310);
}
```

---

## Testing Your Customizations

After making changes to `app/payroll-components.css`:

1. **Save the file**
2. **Refresh your browser** - changes should apply immediately due to hot module reloading
3. **Check both light and dark modes** if you've customized theme variables
4. **Test all component states**: hover, focus, disabled, active

---

## Best Practices

1. **Use CSS Variables**: Always override variables rather than hardcoding values in component styles
2. **Test Dark Mode**: If you customize colors, ensure they work in both light and dark modes
3. **Maintain Contrast**: Ensure text remains readable on backgrounds (WCAG AA minimum: 4.5:1)
4. **Keep Consistency**: Use the provided spacing scale rather than arbitrary values
5. **Document Changes**: Comment your customizations for future reference
6. **Version Control**: Commit your `payroll-components.css` changes separately for easy rollback

---

## Troubleshooting

### My colors aren't changing

- Check the CSS import order in `app/root.tsx`
- Ensure you're using `:root` selector in `app/payroll-components.css`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Dark mode looks wrong

- Make sure to define both `:root` and `.dark` selectors
- Test with `.dark` class on the `<html>` element

### Components look broken

- Verify all required variables are defined
- Check browser console for CSS errors
- Ensure variable values have correct units (px, rem, etc.)

### Typography changes not applying

- Font variables may be overridden by Tailwind classes
- Use `!important` sparingly only when necessary
- Check if components use inline styles that override CSS variables

---

## Need Help?

- Review the existing customizations in `app/payroll-components.css`
- Check component source code in `node_modules/@payroo-group/payroll-components/`
- Use browser DevTools to inspect computed CSS variable values
- Test changes incrementally to isolate issues

---

## Resources

- [OKLCH Color Picker](https://oklch.com/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
