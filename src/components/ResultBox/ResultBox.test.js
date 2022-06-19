import { render, screen, output } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

const testCasesPLN = [
    { amount: '100', from: 'PLN', to: 'USD', textContent: 'PLN 100.00 = $28.57' },
    { amount: '50', from: 'PLN', to: 'USD', textContent: 'PLN 50.00 = $14.29' },
    { amount: '36', from: 'PLN', to: 'USD', textContent: 'PLN 36.00 = $10.29' },
    { amount: '280', from: 'PLN', to: 'USD', textContent: 'PLN 280.00 = $80' },
];

for (const testObj of testCasesPLN) {

  describe("Component ResultBoxPLN", () => {
    it("should render proper info about conversion when PLN -> USD", () => {
      //render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      //find "result" div
      const resultDiv = screen.getByTestId("resultDiv");

      //check if result has proper content
      expect(resultDiv).toHaveTextContent(testObj.textContent);
    });
  });
};

const testCasesUSD = [
    { amount: '100', from: 'USD', to: 'PLN', textContent: '$100.00 = PLN 350.00' },
    { amount: '50', from: 'USD', to: 'PLN', textContent: '$50.00 = PLN 175.00' },
    { amount: '36', from: 'USD', to: 'PLN', textContent: '$36.00 = PLN 126.00' },
    { amount: '280', from: 'USD', to: 'PLN', textContent: '$280.00 = PLN 980.00' },
];

for (const testObj of testCasesUSD) {

  describe("Component ResultBoxUSD", () => {
    it("should render proper info about conversion when PLN -> USD", () => {
      //render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      //find "result" div
      const resultDiv = screen.getByTestId("resultDiv");

      //check if result has proper content
      expect(resultDiv).toHaveTextContent(testObj.textContent);
    });
  });
};

const testCasesEqual = [
  { amount: '100', from: 'USD', to: 'USD', textContent: '$100.00 = $100.00'},
  { amount: '136', from: 'USD', to: 'USD', textContent: '$136.00 = $136.00'},
  { amount: '100', from: 'PLN', to: 'PLN', textContent: 'PLN 100.00 = PLN 100.00'},
  { amount: '136', from: 'PLN', to: 'PLN', textContent: 'PLN 136.00 = PLN 136.00'},
];

for (const testObj of testCasesEqual) {

  describe("Component ResultBoxEqual", () => {
    it("should render proper info about conversion when same currency", () => {
      //render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      //find "result" div
      const resultDiv = screen.getByTestId("resultDiv");

      //check if result has proper content
      expect(resultDiv).toHaveTextContent(testObj.textContent);
    });
  });
};

const testCasesNegative = [
  { amount: '-100', from: 'USD', to: 'USD', textContent: 'Wrong value…'},
  { amount: '-136', from: 'USD', to: 'USD', textContent: 'Wrong value…'},
  { amount: '-100', from: 'PLN', to: 'PLN', textContent: 'Wrong value…'},
  { amount: '-136', from: 'PLN', to: 'PLN', textContent: 'Wrong value…'},
];

for (const testObj of testCasesNegative) {

  describe("Component ResultBoxNegative", () => {
    it("should show Wrong value… when negative numbers", () => {
      //render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      //find "result" div
      const resultDiv = screen.getByTestId("resultDiv");

      //check if result has proper content
      expect(resultDiv).toHaveTextContent(testObj.textContent);
    });
  });
};