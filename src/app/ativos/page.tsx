import { Card } from "@/components/ui/Card";

export default function AtivosPage() {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold text-[#333333]">
        Ativos
      </h1>
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-[#1A2C5B]">
          Detalhes de Criptomoedas
        </h3>
        <p className="text-[#333333]">
          Gráficos em tempo real e detalhes de ativos individuais.
        </p>
      </Card>
    </div>
  );
}
