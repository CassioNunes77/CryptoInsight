import Link from "next/link";

export default function RegistroPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-lg border border-[#F0F2F5] bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-[#1A2C5B]">
          Criar Conta
        </h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#333333]">
              Nome
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-lg border border-[#F0F2F5] bg-[#F0F2F5] px-4 py-3 text-[#333333] focus:border-[#2196F3] focus:outline-none"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#333333]">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-[#F0F2F5] bg-[#F0F2F5] px-4 py-3 text-[#333333] focus:border-[#2196F3] focus:outline-none"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#333333]">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-lg border border-[#F0F2F5] bg-[#F0F2F5] px-4 py-3 text-[#333333] focus:border-[#2196F3] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-[#00C853] py-3 font-medium text-white transition-colors hover:bg-[#00A843]"
          >
            Registrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[#333333]">
          Já tem conta?{" "}
          <Link href="/login" className="text-[#2196F3] hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
