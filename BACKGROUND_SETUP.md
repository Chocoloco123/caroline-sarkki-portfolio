# Golden Gate Bridge Background Setup Guide

## Quick Setup Instructions

To use the Golden Gate Bridge background image instead of the current gradient:

### Step 1: Update Hero.scss
In `src/components/Hero.scss`, make these changes:

1. **Comment out the gradient background:**
   ```scss
   // background: $gradient-primary;
   ```

2. **Uncomment the background image lines:**
   ```scss
   background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   ```

3. **Enable the overlay for better text readability:**
   ```scss
   // Change this line:
   display: none;
   // To this:
   display: block;
   ```

### Step 2: Alternative - Use Your Own Image

If you want to use your own Golden Gate Bridge photo:

1. **Add your image to the public folder:**
   - Create a `public/images/` folder
   - Add your image (e.g., `golden-gate-bridge.jpg`)

2. **Update the background-image URL:**
   ```scss
   background-image: url('/images/golden-gate-bridge.jpg');
   ```

### Step 3: Customize the Overlay

You can adjust the overlay opacity for better text readability:
```scss
background: rgba(0, 0, 0, 0.4); // Current opacity
// Try these alternatives:
background: rgba(0, 0, 0, 0.3); // Lighter overlay
background: rgba(0, 0, 0, 0.5); // Darker overlay
```

## Benefits of Using Background Image

- **More Personal**: Shows your connection to San Francisco Bay Area
- **Visual Interest**: Adds depth and character to the hero section
- **Professional**: Creates a unique, memorable first impression
- **Local Connection**: Reinforces your Bay Area location

## Performance Considerations

- **External Image**: The Unsplash URL loads a high-quality image
- **Optimized**: The URL includes optimization parameters for web delivery
- **Fallback**: The gradient remains as a fallback if the image fails to load

## Reverting Back

To go back to the gradient design, simply:
1. Uncomment: `background: $gradient-primary;`
2. Comment out the background-image lines
3. Set overlay to: `display: none;`
