import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function AssinaturaPage() {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold text-[#333333]">
        Plano Premium
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="mb-2 text-lg font-semibold text-[#1A2C5B]">
            Plano Gratuito
          </h3>
          <p className="mb-4 text-[#333333]">
            Acesso básico aos dados de mercado.
          </p>
          <span className="text-2xl font-bold text-[#333333]">R$ 0/mês</span>
        </Card>
        <Card className="border-2 border-[#00C853]">
          <h3 className="mb-2 text-lg font-semibold text-[#1A2C5B]">
            Plano Premium
          </h3>
          <p className="mb-4 text-[#333333]">
            Alertas em tempo real, monitoramento avançado e suporte prioritário.
          </p>
          <span className="text-2xl font-bold text-[#00C853]">R$ 49/mês</span>
          <Link
            href="/assinatura/checkout"
            className="mt-4 inline-block rounded-lg bg-[#00C853] px-6 py-3 font-medium text-white transition-colors hover:bg-[#00A843]"
          >
            Assinar com Bitcoin
          </Link>
        </Card>
      </div>
    </div>
  );
}
