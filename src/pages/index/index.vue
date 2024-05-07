<template>
  <!-- Header -->
  <section
    class="w-full relative min-w-[460px] min-h-[50vh] flex flex-col pb-10"
  >
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-brand-blue-dark-2 bg-[radial-gradient(#8ccc0033_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>

    <header
      class="w-full bg-gradient-to-tr from-brand-blue-dark-2/40 to-brand-blue-dark/4 0"
    >
      <div class="max-w-screen-xl mx-auto flex items-center h-28">
        <img src="@/assets/images/logos/logo2.png" alt="" />
        <div class="flex justify-end flex-1 items-center gap-x-8">
          <nav class="list-none flex gap-x-8 font-bold text-white">
            <li><a href="">Impulsum</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Fale conosco</a></li>
            <li><a href="">Trabalhe conosco</a></li>
          </nav>
          <div class="flex gap-x-3">
            <button
              class="inline-flex items-center rounded-md py-2 px-4 font-medium text-brand-green bg-brand-green/20 backdrop-blur"
            >
              <LucideLogIn class="inline mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="flex-1 flex items-center">
      <div class="max-w-screen-xl mx-auto flex flex-1">
        <article class="flex flex-col justify-center w-3/5">
          <h2 class="text-5xl text-white font-bold mb-8 leading-none">
            Mensuração <br />
            impactando a
            <span class="text-brand-green">sustentabilidade</span>
          </h2>
          <p class="text-white text-xl leading-snug mb-8">
            Somos uma empresa de mensuração, reporte e monitoramento de dados
            ESG. Desenvolvemos soluções tecnológicas para a sua gestão de
            sustentabilidade.
          </p>

          <div class="">
            <button
              class="inline-flex items-center rounded-md py-2 px-4 font-medium text-white bg-brand-green/90 text-xl"
            >
              <LucideClipboardPen class="inline mr-2" />
              Solicitar Demo
            </button>
          </div>
        </article>

        <div class="flex items-center justify-end flex-1">
          <img
            class="h-[460px]"
            src="@/assets/images/illustrations/3.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Nossos Clientes -->
  <section class="py-20">
    <div class="max-w-screen-xl mx-auto">
      <h3 class="text-3xl font-bold text-zinc-700 mb-8 text-center">
        Nossos clientes
      </h3>

      <div>
        <carousel :autoplay="2000" :items-to-show="4" :wrap-around="true">
          <slide index="1">
            <img src="@/assets/images/clients/clientes-deep-1.jpg" alt="" />
          </slide>
          <slide index="2">
            <img src="@/assets/images/clients/clientes-deep-2.jpg" alt="" />
          </slide>
          <slide index="3">
            <img src="@/assets/images/clients/clientes-deep-3.jpg" alt="" />
          </slide>
          <slide index="4">
            <img src="@/assets/images/clients/clientes-deep-4.jpg" alt="" />
          </slide>
          <slide index="5">
            <img src="@/assets/images/clients/clientes-deep-5.jpg" alt="" />
          </slide>
          <slide index="6">
            <img src="@/assets/images/clients/clientes-deep-6.jpg" alt="" />
          </slide>
          <slide index="7">
            <img src="@/assets/images/clients/clientes-deep-7.jpg" alt="" />
          </slide>
          <slide index="8">
            <img src="@/assets/images/clients/clientes-deep-8.jpg" alt="" />
          </slide>
          <slide index="9">
            <img src="@/assets/images/clients/clientes-deep-9.jpg" alt="" />
          </slide>
          <slide index="10">
            <img src="@/assets/images/clients/clientes-deep-10.jpg" alt="" />
          </slide>
          <slide index="11">
            <img src="@/assets/images/clients/clientes-deep-11.jpg" alt="" />
          </slide>
          <slide index="12">
            <img src="@/assets/images/clients/clientes-deep-12.jpg" alt="" />
          </slide>
          <slide index="13">
            <img src="@/assets/images/clients/clientes-deep-14.jpg" alt="" />
          </slide>
          <slide index="14">
            <img src="@/assets/images/clients/clientes-deep-15.jpg" alt="" />
          </slide>
          <slide index="15">
            <img src="@/assets/images/clients/clientes-deep-18.jpg" alt="" />
          </slide>
          <slide index="16">
            <img src="@/assets/images/clients/clientes-deep-19.jpg" alt="" />
          </slide>

          <template #addons>
            <div class="mt-10">
              <Pagination />
            </div>
          </template>
        </carousel>
      </div>
    </div>
  </section>

  <!-- Produtos -->
  <section class="bg-brand-green/10 py-20 min-h-[50vh] relative">
    <div class="max-w-screen-xl mx-auto relative">
      <!-- Nav -->
      <div class="flex justify-end">
        <nav
          class="text-brand-blue-dark-2/80 rounded-t-md bg-brand-green list-none items-center flex text-xl font-semibold"
        >
          <li
            class="px-8 py-2 transition-all delay-150 cursor-pointer"
            @click="selectActiveTab(PillarTabEnum.MEASUREMENT)"
            :class="{ 'bg-white/30': activeTab === PillarTabEnum.MEASUREMENT }"
          >
            Mensuração
          </li>

          <li
            class="px-8 py-2 transition-all delay-150 hover:bg-white/20 cursor-pointer"
            @click="selectActiveTab(PillarTabEnum.MANAGEMENT)"
            :class="{ 'bg-white/30': activeTab === PillarTabEnum.MANAGEMENT }"
          >
            Gestão
          </li>
          <li
            class="px-8 py-2 transition-all delay-150 hover:bg-white/20 cursor-pointer"
            @click="selectActiveTab(PillarTabEnum.IMPACTS)"
            :class="{ 'bg-white/30': activeTab === PillarTabEnum.IMPACTS }"
          >
            Impacto
          </li>
        </nav>
      </div>

      <!-- Mensuracao -->
      <div
        class="flex relative z-0 min-h-[720px]"
        v-show="activeTab === PillarTabEnum.MEASUREMENT"
      >
        <div
          class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        ></div>

        <div class="w-2/3 relative">
          <div class="p-10">
            <h3 class="text-3xl text-zinc-800 font-bold mb-8">Mensuração</h3>
            <div
              class="text-zinc-700 space-y-8 text-lg leading-relaxed font-normal"
            >
              <p>
                Parte fundamental da jornada de sustentabilidade para empresas é
                a mensuração do seu impacto, principalmente de suas emissões de
                carbono. Para facilitar, a DEEP apresenta duas soluções que
                realizam inventários de emissões de Gases de Efeito Estufa
                (GEE), com emissões de escopos 1, 2 e 3 (upstream).
              </p>

              <p>
                A primeira, para empresas que precisam de uma solução simples e
                rápida,
                <strong>entregando um inventário em até 3 semanas</strong> após
                o envio de dados, sendo o tempo médio pelos métodos tradicionais
                em até 3 meses.
              </p>

              <p>
                Outra solução, mais completa e integrada, que permite o
                acompanhamento das emissões mês a mês, apresentando uma visão
                granular das informações (unidades operacionais) e, também, o
                acompanhamento mensal com detalhamento por escopo e categoria do
                GHG. Além disso, o vínculo direto com os dados contábeis e
                financeiros garante a rastreabilidade dos dados e reduz o
                trabalho manual de coleta, liberando tempo operacional da
                equipe.
              </p>

              <button
                class="inline-flex items-center text-brand-green bg-brand-green/10 rounded-md px-4 py-2 border-2 border-brand-green font-bold"
              >
                <LucideArrowRight class="inline mr-2" />
                Quero conhecer
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center flex-1">
          <img
            class="w-full"
            src="@/assets/images/illustrations/5.svg"
            alt=""
          />
        </div>
      </div>

      <!-- Gestão -->
      <div
        class="flex relative z-0 min-h-[720px]"
        v-show="activeTab === PillarTabEnum.MANAGEMENT"
      >
        <div
          class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        ></div>

        <div class="w-2/3 relative">
          <div class="p-10">
            <h3 class="text-3xl text-zinc-800 font-bold mb-8">Gestão</h3>
            <div
              class="text-zinc-700 space-y-8 text-lg leading-relaxed font-normal"
            >
              <p>
                Dando mais um passo na jornada ESG é necessário gerenciar os
                dados que são obtidos. Para isso, a DEEP apresenta soluções que
                simplificam o fluxo de coleta de indicadores ESG e
                <strong>centraliza todos os indicadores em um só lugar</strong>.
                E, em conformidade com os parâmetros internacionais do GRI e
                SASB, entre outros,
                <strong
                  >para o preenchimento de relatórios de sustentabilidade com a
                  maior facilidade</strong
                >.
              </p>

              <p>
                Nessas soluções, temos como criar dashboards de gestão da
                sustentabilidade para uma visão granular das informações
                (unidades operacionais) o que permite o acompanhamento mensal
                com detalhamento por escopo e categoria do GHG. Além disso, o
                vínculo direto com os dados contábeis e financeiros garante a
                rastreabilidade dos dados, reduz o trabalho manual de coleta,
                liberando tempo estratégico da equipe e
                <strong
                  >gera informações sólidas para tomada de decisões
                  estratégicas.</strong
                >
              </p>

              <button
                class="inline-flex items-center text-brand-green bg-brand-green/10 rounded-md px-4 py-2 border-2 border-brand-green font-bold"
              >
                <LucideArrowRight class="inline mr-2" />
                Quero conhecer
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center flex-1">
          <img
            class="max-w-[640px]"
            src="@/assets/images/illustrations/6.svg"
            alt=""
          />
        </div>
      </div>

      <!-- Impactar -->
      <div
        class="flex min-h-[720px] relative z-0"
        v-show="activeTab === PillarTabEnum.IMPACTS"
      >
        <div
          class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        ></div>

        <div class="w-2/3 relative">
          <div class="p-10">
            <h3 class="text-3xl text-zinc-800 font-bold mb-8">Impacto</h3>
            <div
              class="text-zinc-700 space-y-8 text-lg leading-relaxed font-normal"
            >
              <p>
                O impacto ESG de uma empresa vai além das suas atividades, por
                isso corporações, sejam instituições financeiras, sejam empresas
                com extensas supply chains, precisam engajar seus stakeholders
                com o ESG.
              </p>

              <p>
                Tradicionalmente, existe uma dificuldade grande em mensurar
                emissões de gases de efeito estufa e outros impactos da cadeia
                de fornecedores e clientes, por exemplo: emissões financiadas.
                Em função da complexidade dos dados, da falta de padronização
                nas métricas e da dificuldade em integrar informações das
                diversas fontes.
              </p>

              <p>
                <strong
                  >A tecnologia inovadora da DEEP supera todos esses
                  desafios</strong
                >
                e gera relatórios em conformidade com os principais padrões e
                frameworks de divulgação do mercado, entregando uma visão
                granular das informações de impacto, com análises de toda a
                cadeia de valor.
              </p>

              <p>
                <strong>
                  DEEP. Transformando dados em informações, informações em
                  decisões!
                </strong>
              </p>

              <button
                class="inline-flex items-center text-brand-green bg-brand-green/10 rounded-md px-4 py-2 border-2 border-brand-green font-bold"
              >
                <LucideArrowRight class="inline mr-2" />
                Quero conhecer
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center flex-1">
          <img
            class="max-w-[640px]"
            src="@/assets/images/illustrations/2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Ciclo de Sustentabilidade -->
  <section>
    <div
      class="mx-auto max-w-screen-xl min-h-[50vh] py-20 flex flex-col justify-center"
    >
      <div class="flex">
        <div class="flex-1 flex justify-start items-center -ml-14 -mt-24">
          <img
            class="max-w-[640px] -right-10"
            src="@/assets/images/illustrations/10.svg"
            alt=""
          />
        </div>
        <!-- Texto -->
        <div class="w-2/5 text-zinc-600 text-lg">
          <h3 class="text-3xl font-bold mb-8 text-zinc-700">
            Faça parte do ciclo da sustentabilidade
          </h3>
          <ul class="mb-8 space-y-3">
            <li class="flex items-center">
              <LucideRefreshCw class="mr-2" :size="18" /> Mensurando você
              adquire conhecimento
            </li>
            <li class="flex items-center">
              <LucideRefreshCw class="mr-2" :size="18" /> Com conhecimento você
              toma consciência
            </li>
            <li class="flex items-center">
              <LucideRefreshCw class="mr-2" :size="18" /> Com a consciência você
              se torna parte da transformação
            </li>
            <li class="flex items-center">
              <LucideRefreshCw class="mr-2" :size="22" /> Fazendo parte da
              mudança você começa a promover o impacto a sua volta
            </li>
          </ul>
          <p class="mb-8">
            Aumente o resultado de suas iniciativas sustentáveis. Conheça nossas
            soluções inovadoras para mensuração de seus impactos ESG.
          </p>

          <button
            class="inline-flex items-center text-brand-blue bg-brand-blue/10 rounded-md px-4 py-2 border-2 border-brand-blue font-bold"
          >
            <LucideArrowRight class="inline mr-2" />
            Quero conhecer
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Rodapé -->
  <footer class="relative bg-brand-blue-dark-2 z-0">
    <div class="mx-auto max-w-screen-xl py-10">
      <div class="flex justify-center mb-10">
        <img src="@/assets/images/logos/logo.png" alt="" />
      </div>
      <div class="flex gap-x-8 relative justify-center">
        <div class="pb-10">
          <h3 class="text-brand-green font-semibold text-xl mb-4">Contato</h3>
          <div class="text-white space-y-4">
            <div class="flex gap-x-2 items-center">
              <LucideMail class="text-brand-green" :size="18" />deep@deepesg.com
            </div>
            <div class="flex gap-x-2 items-center">
              <LucidePhone class="text-brand-green" :size="18" />+55 12
              3933-1428
            </div>
            <div class="flex gap-x-2 items-center">
              <LucideMap class="text-brand-green" :size="18" /> São José dos
              Campos, SP - Brasil
            </div>
          </div>
        </div>

        <div class="min-h-full w-[1px] bg-brand-blue/20"></div>

        <div class="pb-10">
          <h3 class="text-brand-green font-semibold text-xl mb-4">
            Redes Sociais
          </h3>
          <div class="flex gap-x-4">
            <LucideInstagram class="text-brand-green" />
            <LucideLinkedin class="text-brand-green" />
            <LucideYoutube class="text-brand-green" />
          </div>
        </div>

        <div class="min-h-full w-[1px] bg-brand-blue/20"></div>

        <div class="pb-10">
          <h3 class="text-brand-green font-semibold text-xl mb-4">DEEP</h3>
          <div class="text-white space-y-4">
            <div class="flex gap-x-2 items-center">
              <LucideBriefcase class="text-brand-green" :size="18" /> Trabalhe
              conosco
            </div>
            <div class="flex gap-x-2 items-center">
              <LucideSpeech class="text-brand-green" :size="18" /> Fale Conosco
            </div>
          </div>
        </div>
      </div>

      <hr class="mx-auto mb-10 border-brand-blue/20 border-1" />

      <div class="flex gap-x-8 justify-center items-center">
        <img class="h-20" src="@/assets/images/brands/pni1-2.png" alt="" />
        <img class="h-12" src="@/assets/images/brands/icebds1.png" alt="" />
        <img class="h-16" src="@/assets/images/brands/ibracem.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
enum PillarTabEnum {
  MEASUREMENT,
  MANAGEMENT,
  IMPACTS,
}

const activeTab = ref<PillarTabEnum>(PillarTabEnum.MANAGEMENT);

const selectActiveTab = (tab: PillarTabEnum) => {
  activeTab.value = tab;
};
</script>

<style lang="postcss" scoped>
:deep(.carousel__pagination-button::after) {
  @apply rounded-full h-2 w-2 bg-brand-blue-dark-2/25 mr-2;
}
:deep(.carousel__pagination-button--active::after) {
  @apply bg-brand-green;
}
</style>

<style lang="postcss">
* {
  @apply selection:bg-brand-green selection:text-white;
}
</style>
