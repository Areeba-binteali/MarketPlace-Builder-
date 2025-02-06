export {};

declare global {
  interface Window {
    Snipcart?: {
      api: {
        theme: {
          customization: {
            registerPaymentFormCustomization: (options: {
              input: {
                backgroundColor?: string;
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
