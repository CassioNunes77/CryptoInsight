import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold text-[#333333]">
        Checkout - Pagamento Bitcoin
      </h1>
      <Card className="max-w-lg">
        <h3 className="mb-4 text-lg font-semibold text-[#1A2C5B]">
          Plano Premium - R$ 49/mês
        </h3>
        <p className="mb-4 text-[#333333]">
          Envie o valor equivalente em Bitcoin para o endereço abaixo.
          Seu plano será ativado após a confirmação da transação.
        </p>
        <div className="rounded-lg bg-[#F0F2F5] p-4 font-mono text-sm text-[#333333]">
          bc1q... (endereço será gerado ao finalizar)
        </div>
        <Link
          href="/assinatura"
          className="mt-6 inline-block text-[#2196F3] hover:underline"
        >
          ← Voltar aos planos
        </Link>
      </Card>
    </div>
  );
}
