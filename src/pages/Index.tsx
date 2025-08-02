import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-heading font-bold text-2xl gradient-text">
              George Grant
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-300 transition-colors text-lg font-medium">Главная</a>
              <a href="#biography" className="hover:text-yellow-300 transition-colors text-lg font-medium">Биография</a>
              <a href="#music" className="hover:text-yellow-300 transition-colors text-lg font-medium">Музыка</a>
              <a href="#gallery" className="hover:text-yellow-300 transition-colors text-lg font-medium">Галерея</a>
              <a href="#contact" className="hover:text-yellow-300 transition-colors text-lg font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 pulse-glow">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 floating blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-30 floating blur-xl" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 floating blur-xl" style={{animationDelay: '2s'}} />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <img 
              src="/img/0d12a304-7490-4fb9-ba89-265e7d21503c.jpg" 
              alt="George Grant" 
              className="w-64 h-64 rounded-full mx-auto mb-8 shadow-2xl neon-glow object-cover border-4 border-white/30"
            />
          </div>
          
          <h1 className="font-heading text-7xl md:text-9xl font-bold mb-6 gradient-text animate-pulse">
            George Grant
          </h1>
          <p className="text-3xl md:text-4xl mb-8 text-yellow-200 font-light">
            ✨ Известный русско-греческий певец ✨
          </p>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Магия музыки, объединяющая сердца! Уникальное звучание традиций русской и греческой культуры 🎵
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white border-0 px-10 py-6 text-xl font-bold rounded-full neon-glow">
              <Icon name="Play" className="mr-3" size={24} />
              🎧 Слушать музыку
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white border-0 px-10 py-6 text-xl font-bold rounded-full">
              <Icon name="Calendar" className="mr-3" size={24} />
              🎤 Концерты
            </Button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping" />
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-gold">
                Биография
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  George Grant — выдающийся артист, чьё творчество объединяет богатые традиции 
                  русской и греческой музыкальных культур. Его уникальный голос и харизматичное 
                  сценическое присутствие покорили сердца тысяч поклонников по всему миру.
                </p>
                <p>
                  За свою карьеру George выпустил множество альбомов, каждый из которых стал 
                  событием в музыкальном мире. Его песни звучат на радиостанциях различных стран, 
                  а концерты всегда проходят при полных залах.
                </p>
                <p>
                  Артист известен не только своим вокальным мастерством, но и как автор многих 
                  своих композиций, в которых он мастерски сочетает современные аранжировки с 
                  классическими мелодиями.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <div className="text-gray-400">Лет на сцене</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">8</div>
                  <div className="text-gray-400">Альбомов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">500+</div>
                  <div className="text-gray-400">Концертов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/0d12a304-7490-4fb9-ba89-265e7d21503c.jpg" 
                alt="George Grant" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center">
                <Icon name="Star" size={32} className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gold">
              Музыка
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Откройте для себя уникальные композиции, которые тронут вашу душу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Новый альбом 2024",
                subtitle: "Последние хиты",
                image: "/img/31b9c98b-6f77-43d1-a464-702399287836.jpg",
                type: "Альбом"
              },
              {
                title: "Концерт в Москве",
                subtitle: "Живое выступление",
                image: "/img/e0bc9acc-2c76-447b-b08c-f7b7493b30e4.jpg",
                type: "Live"
              },
              {
                title: "Греческие мотивы",
                subtitle: "Традиционные песни",
                image: "/img/0d12a304-7490-4fb9-ba89-265e7d21503c.jpg",
                type: "Сингл"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gold/50 transition-colors group">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {item.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-gold text-black hover:bg-gold/90">
                      <Icon name="Play" size={16} className="mr-2" />
                      Играть
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Icon name="Heart" size={18} className="text-gray-500 hover:text-gold cursor-pointer" />
                      <Icon name="Share2" size={18} className="text-gray-500 hover:text-gold cursor-pointer" />
                    </div>
                    <Icon name="MoreHorizontal" size={18} className="text-gray-500" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gold">
              Видеогалерея
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Эксклюзивные клипы и интервью с George Grant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Новый клип - 'Звёзды над Афинами'",
                duration: "4:32",
                views: "2.1M",
                image: "/img/31b9c98b-6f77-43d1-a464-702399287836.jpg"
              },
              {
                title: "Интервью о новом альбоме",
                duration: "15:47",
                views: "856K",
                image: "/img/e0bc9acc-2c76-447b-b08c-f7b7493b30e4.jpg"
              },
              {
                title: "Закулисье концерта в Санкт-Петербурге",
                duration: "8:15",
                views: "1.3M",
                image: "/img/0d12a304-7490-4fb9-ba89-265e7d21503c.jpg"
              },
              {
                title: "Акустическая версия - 'Родные берега'",
                duration: "3:58",
                views: "3.2M",
                image: "/img/31b9c98b-6f77-43d1-a464-702399287836.jpg"
              }
            ].map((video, index) => (
              <Card key={index} className="bg-black border-gray-800 overflow-hidden hover:border-gold/50 transition-colors group cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.image} 
                    alt={video.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={24} className="text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-white line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>{video.views} просмотров</span>
                    <div className="flex items-center space-x-2">
                      <Icon name="ThumbsUp" size={16} />
                      <Icon name="Share2" size={16} />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gold">
              Контакты
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Для организации концертов и сотрудничества
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-900 border-gray-800 p-8 text-center hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">Email</h3>
                <p className="text-gray-400">booking@georgegrant.ru</p>
              </Card>

              <Card className="bg-gray-900 border-gray-800 p-8 text-center hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">Телефон</h3>
                <p className="text-gray-400">+7 (495) 123-45-67</p>
              </Card>

              <Card className="bg-gray-900 border-gray-800 p-8 text-center hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">Офис</h3>
                <p className="text-gray-400">Москва, Россия</p>
              </Card>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { icon: "Instagram", label: "Instagram" },
                { icon: "Youtube", label: "YouTube" },
                { icon: "Facebook", label: "Facebook" },
                { icon: "Twitter", label: "Twitter" },
                { icon: "Music", label: "Spotify" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-heading font-bold text-2xl text-gold mb-4 md:mb-0">
              George Grant
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 George Grant. Все права защищены.</p>
              <p className="mt-2">Создано с ❤️ для музыки</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;