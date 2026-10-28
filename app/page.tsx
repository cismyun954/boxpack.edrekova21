import Image from "next/image";
type Item = {
  title: string;
  description: string;
};

const steps: Item[] = [
  {
    title: "Приёмка и сортировка",
    description: "Принимаем поставки любого размера и объёма",
  },
  {
    title: "Проверка на брак",
    description: "Контролируем качество перед отправкой покупателю",
  },
  {
    title: "Автоматизированная упаковка",
    description: "Автоматические линни для упаковки заказов",
  },
  {
    title: "Сборка заказов",
    description: "Комплектуем заказы по данным маркетплейсов",
  },
  {
    title: "Отправка на маркетплейсы",
    description: "ППодготавливаем товары к отправке",
  },
  {
    title: "Хранение товаров",
    description: "Безопасное адресное хранение продукции",
  },
];

const services: Item[] = [
  {
    title: "Приёмка и сортировка",
    description: "Принимаем поставки и проверяем товаров",
  },
  {
    title: "Маркировка",
    description: "Маркируем товары по требованиям маркетплейсов",
  },
  {
    title: "Упаковка",
    description: "Подготавливаем товары к отправке",
  },
  {
    title: "Хранение",
    description: "Обеспечиваем безопасное хранение продукции",
  },
];

const advantages: Item[] = [
  {
    title: "Скорость",
    description: "До 20 000 товаров за смену и отправка в день заказа.",
  },
  {
    title: "Точность",
    description: "99,8% точность сборки благодаря автоматизации.",
  },
  {
    title: "Надежность",
    description: "Страхование товаров и круглосуточный контроль.",
  },
  {
    title: "Поддержка",
    description: "Персональный менеджер и оперативная помощь.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#202020]">
      <header className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <a href="#" className="text-2xl font-black tracking-tight text-[#202d54]">
            BOXPACK
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#333]">
            <a href="#services" className="hover:text-[#45b7c8]">Услуги</a>
            <a href="#steps" className="hover:text-[#45b7c8]">Как это работает</a>
            <a href="#video" className="hover:text-[#45b7c8]">Видеофиксация</a>
            <a href="#calculator" className="hover:text-[#45b7c8]">Калькулятор</a>
            <a href="#cases" className="hover:text-[#45b7c8]">Кейсы</a>
            <a href="#contacts" className="hover:text-[#45b7c8]">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="bg-[#202d54] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-sm text-slate-300">
              Автоматизированный фулфилмент
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              Фулфилмент, который держит сроки и репутацию
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
              Автоматизированная упаковка, видеоконтроль каждого заказа
              и отправка в день поступления. Мы берём на себя хранение,
              сборку, маркировку и логистику.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href="#calculator"
                className="font-semibold text-white hover:text-[#55c1d0]"
              >
                Рассчитать стоимость →
              </a>

              <a
                href="#contacts"
                className="rounded border border-slate-400 px-5 py-3 text-sm hover:bg-white/10"
              >
                Получить консультацию
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                ["5000+", "заказов в день"],
                ["99,8%", "точность сборки"],
                ["FBO/FBS", "все маркетплейсы"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-lg bg-[#354267] p-4">
                  <p className="text-xl font-bold"
                  >{value}</p>
                  <p className="mt-1 text-xs text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="video"
            className="flex min-h-64 items-center justify-center rounded-lg bg-[#d1d5df] p-8 text-center text-sm text-[#333]"
          >
            Видео автоматической упаковочной линии
          </div>
        </div>
      </section>

      <section id="steps" className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">
            Как начать работать с нами
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600">
            Подключение занимает всего несколько дней. Все процессы
            максимально автоматизированы.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ title, description }, i) => (
              <article
                key={title}
                className="min-h-32 rounded-lg border-t-4 border-[#d7d7d7] bg-[#f0f0f0] p-5 shadow-sm"
              >
                <p className="text-xs font-bold">ШАГ {i + 1}</p>
                <h3 className="mt-2 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-4 text-gray-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="bg-[#f7f7f7] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">
            Услуги фулфилмента
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Полный цикл обработки товара от приёмки до доставки.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description }) => (
              <article
                key={title}
                className="min-h-36 rounded-lg border-t-4 border-[#50bdcc] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
            <section id="why" className="bg-[#202d54] px-5 py-12 text-white md:py-16">
              <div className="mx-auto max-w-5xl">
                <h2 className="text-center text-3xl font-bold">Почему выбирают BOXPACK</h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {advantages.map(({ title, description }) => (
                  <article
                  key={title}
                  className="rounded-lg bg-[#354267] p-5"
                  >
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-3 text-xs leading-5 text-slate-300">{description}</p>
                  </article>
                ))}
              </div>
              </div>
            </section>
    </main>
  );
}