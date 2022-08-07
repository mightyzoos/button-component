class Button extends HTMLButtonElement {
    constructor() {
        super();

        let shadow = this.attachShadow({ mode: 'open' });
        
        // Define elements
        let style = document.createElement('style');
        let button = document.createElement('button');

        button.textContent = "Default";

        // Define constant colors
        const paletteMap = new Map();
        paletteMap.set('default', '#E2E8F0');
        paletteMap.set('primary', '#2563EB');
        paletteMap.set('secondary', '#064E3B');
        paletteMap.set('danger', '#DC2626');
        paletteMap.set('disabled', '#4B5563');


        // Define custom button attributes
        let variant = this.getAttribute('data-variant');
        let disableShadow = this.getAttribute('data-disableShadow');
        let disabled = this.getAttribute('data-disabled') === "";
        //let startIcon = this.getAttribute('startIcon');
        //let endIcon = this.getAttribute('endIcon');
        let size = this.getAttribute('data-size') ?  this.getAttribute('data-size') : 'md';
        let color = this.getAttribute('data-color') ? this.getAttribute('data-color') : 'default';

        // Define button classes based on attributes
        let classList = "button";
        if (variant) classList += ` button--${variant}`;
        if (disableShadow) classList += ' disableShadow';
        if (disabled) classList += ' disabled';
        if (size) classList += ` button--${size}`;
        if (color) classList += ` button--${color}`;
        button.setAttribute('class', classList);

        // Define css styles
        style.textContent = `
        .button {
            border: 0px;
            border-radius: 10px;
            padding: 0.75rem 1rem;
        }
        .button:hover {
            filter: brightness(85%);
        }
        
        .button:focus {
            filter: brightness(85%);
        }

        .button--default {
            background-color: ${paletteMap.get('default')};
        }

        .button--primary {
            color: white;
            background-color: ${paletteMap.get('primary')};
        }

        .button--secondary {
            color: white;
            background-color: ${paletteMap.get('secondary')};
        }

        .button--danger {
            color: white;
            background-color: ${paletteMap.get('danger')};
        }

        .button--sm {
            font-size: 0.5rem;
        }

        .button--md {
            font-size: 1rem;
        }

        .button--lg {
            font-size: 2rem;
        }

        .button--outline {
            background-color: unset;
            border: 1px solid ${paletteMap.get(color)};
            color: ${paletteMap.get(color)};
        }
        
        .button--text {
            background: none;
            color: ${paletteMap.get(color)};
        }
        
        .button--outline:hover, .button--outline:focus, .button--text:hover, .button--text:focus {
            background-color: ${paletteMap.get(color)}22;
        }

        .disabled {
            color: ${paletteMap.get('disabled')};
            background-color: ${paletteMap.get('disabled')}22;
        }

        .disabled.button--outline {
            border-color: ${paletteMap.get('disabled')};
        }

        .disabled.button--outline:hover {
            background-color: ${paletteMap.get('disabled')}22;
        }

        .disabled.button--text {
            background-color: unset;
        }
        `;

        // Attach elements to Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

// Define the new element
customElements.define('custom-button', Button, { extends: 'button' });