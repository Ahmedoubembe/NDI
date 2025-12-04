'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Contribution {
  id: number;
  author: string;
  type: 'success' | 'question' | 'resource';
  title: string;
  content: string;
  likes: number;
}

export default function CommunityPage() {
  const [contributions] = useState<Contribution[]>([
    {
      id: 1,
      author: 'Marie L.',
      type: 'success',
      title: 'Migration complète vers Linux !',
      content: 'Après 3 mois d\'utilisation, j\'ai réussi à migrer toute ma famille sur Linux Mint. Les enfants adorent !',
      likes: 42
    },
    {
      id: 2,
      author: 'Thomas K.',
      type: 'resource',
      title: 'Guide de réparation PC',
      content: 'J\'ai créé un guide complet pour réparer et réemployer de vieux ordinateurs. Disponible en licence libre.',
      likes: 38
    },
    {
      id: 3,
      author: 'Sophie M.',
      type: 'question',
      title: 'Alternative à Google Drive ?',
      content: 'Quelqu\'un utilise Nextcloud pour remplacer Google Drive ? Retours d\'expérience ?',
      likes: 15
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contribution: ''
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'from-green-500 to-emerald-500';
      case 'question': return 'from-blue-500 to-indigo-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'success': return '🎉';
      case 'question': return '❓';
      case 'resource': return '📚';
      default: return '💬';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-pink-900 to-indigo-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-8xl mb-6"
            >
              🤝
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              L'Agora des Résistants
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
              Rejoignez la communauté NIRD et partagez vos expériences
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <Card gradient="from-blue-600 to-blue-700">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">2,547</div>
                <div className="text-blue-100">Résistants</div>
              </div>
            </Card>
            <Card gradient="from-green-600 to-green-700">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">8,934</div>
                <div className="text-green-100">Actions réalisées</div>
              </div>
            </Card>
            <Card gradient="from-purple-600 to-purple-700">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">456</div>
                <div className="text-purple-100">Contributions</div>
              </div>
            </Card>
          </div>
        </FadeIn>

        {/* Contributions Feed */}
        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              💬 Dernières Contributions
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {contributions.map((contrib, index) => (
                <motion.div
                  key={contrib.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card gradient="from-white/10 to-white/5" hover={true}>
                    <div className="flex items-start gap-4">
                      {/* Type Badge */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(contrib.type)} flex items-center justify-center text-3xl`}>
                        {getTypeIcon(contrib.type)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {contrib.title}
                            </h3>
                            <p className="text-sm text-gray-400">Par {contrib.author}</p>
                          </div>
                        </div>

                        <p className="text-gray-200 mb-4">{contrib.content}</p>

                        <div className="flex items-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                          >
                            <span>❤️</span>
                            <span className="font-semibold">{contrib.likes}</span>
                          </motion.button>

                          <button className="text-gray-400 hover:text-white transition-colors text-sm">
                            Répondre
                          </button>

                          <button className="text-gray-400 hover:text-white transition-colors text-sm">
                            Partager
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contribution Form */}
        <FadeIn delay={0.6}>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              ✍️ Partagez votre expérience
            </h2>

            <Card gradient="from-white/10 to-white/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Votre contribution
                  </label>
                  <textarea
                    value={formData.contribution}
                    onChange={(e) => setFormData({...formData, contribution: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Partagez votre succès, posez une question ou proposez une ressource..."
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Publier ma contribution 🚀
                </Button>
              </form>
            </Card>
          </div>
        </FadeIn>

        {/* Ways to Contribute */}
        <FadeIn delay={0.8}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              🌟 Comment contribuer ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card gradient="from-green-600 to-emerald-600" hover={true}>
                <div className="text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Partagez vos succès
                  </h3>
                  <p className="text-white/80 text-sm">
                    Inspirez la communauté avec vos réussites
                  </p>
                </div>
              </Card>

              <Card gradient="from-blue-600 to-indigo-600" hover={true}>
                <div className="text-center">
                  <div className="text-5xl mb-4">❓</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Posez des questions
                  </h3>
                  <p className="text-white/80 text-sm">
                    La communauté est là pour vous aider
                  </p>
                </div>
              </Card>

              <Card gradient="from-purple-600 to-pink-600" hover={true}>
                <div className="text-center">
                  <div className="text-5xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Partagez des ressources
                  </h3>
                  <p className="text-white/80 text-sm">
                    Guides, tutoriels, outils libres...
                  </p>
                </div>
              </Card>

              <Card gradient="from-orange-600 to-red-600" hover={true}>
                <div className="text-center">
                  <div className="text-5xl mb-4">🤲</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Aidez les autres
                  </h3>
                  <p className="text-white/80 text-sm">
                    Répondez aux questions de la communauté
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={1}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Rejoignez-nous aussi sur
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { name: 'Forum', icon: '💬', color: 'from-blue-500 to-blue-600' },
                { name: 'Discord', icon: '🎮', color: 'from-indigo-500 to-purple-600' },
                { name: 'Mastodon', icon: '🐘', color: 'from-purple-500 to-pink-600' },
                { name: 'PeerTube', icon: '📹', color: 'from-orange-500 to-red-600' }
              ].map((platform, index) => (
                <motion.button
                  key={platform.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className={`bg-gradient-to-br ${platform.color} text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
                >
                  <span className="text-2xl">{platform.icon}</span>
                  <span>{platform.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
