import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold text-[#333333]">
        Dashboard
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <h3 className="mb-2 text-lg font-semibold text-[#1A2C5B]">
            Visão Geral do Mercado
          </h3>
          <p className="text-[#333333]">
            Resumo de preços e volumes em tempo real.
          </p>
        </Card>
        <Card>
          <h3 className="mb-2 text-lg font-semibold text-[#1A2C5B]">
            Notícias Principais
          </h3>
          <p className="text-[#333333]">
            Últimas notícias do mercado cripto.
          </p>
        </Card>
        <Card>
          <h3 className="mb-2 text-lg font-semibold text-[#1A2C5B]">
            Resumo do Portfólio
          </h3>
          <p className="text-[#333333]">
            Seus ativos e performance.
          </p>
        </Card>
      </div>
    </div>
  );
}
