import { Card } from "@/components/ui/Card";

export default function AlertasPage() {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold text-[#333333]">
        Alertas
      </h1>
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-[#1A2C5B]">
          Configuração de Alertas
        </h3>
        <p className="text-[#333333]">
          Configure e visualize alertas personalizados para seus ativos.
        </p>
      </Card>
    </div>
  );
}
