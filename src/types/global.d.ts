export {};

declare global {
  interface Window {
    Snipcart?: {
      api: {
        theme: {
          customization: {
            registerPaymentFormCustomization: (options: {
              input: {
                color?: string;
                border?: string;
                fontSize?: string;
                placeholder?: {
                  color?: string;
                };
              };
              label: {
                color?: string;
                fontSize?: string;
              };
            }) => void;
          };
        };
      };
    };
  }
}
