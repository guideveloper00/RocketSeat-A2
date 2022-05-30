import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

interface Transaction {
  id: string;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  CreateTransaction: (Transaction: TransactionInput) => Promise<void>;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("@DATA2")!);
    if (storageData) {
      setTransactions(storageData);
    } else {
      api.get("/transactions").then((response) => {
        setTransactions(response.data.transactions);
        localStorage.setItem(
          "@DATA2",
          JSON.stringify(response.data.transactions)
        );
      });
    }
  }, []);

  async function CreateTransaction(transaction: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transaction,
      createdAt: new Date(),
    });

    const newTransaction = response.data.transactions;

    localStorage.setItem(
      "@DATA2",
      JSON.stringify([...transactions, newTransaction])
    );

    setTransactions([...transactions, newTransaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, CreateTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
