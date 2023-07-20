Aqui está a lista sem os números no início de cada item:

id	nome	descricao	lancamento	plataforma	imagemurl	preco

Red Dead Redemption 2	Uma história épica de um fora-da-lei em fuga, ambientada no Velho Oeste americano.	2018-10-26	PlayStation 4, Xbox One	https://img.hype.games/cdn/635eed3e-ba6f-4cb7-9685-5c6ce64e1e0fRed-Dead-Redemption-2-Cover.jpg	

The Last of Us Part II	A continuação da história pós-apocalíptica de Ellie e Joel, com uma narrativa envolvente e jogabilidade intensa.	2020-06-19	PlayStation 4	https://4kwallpapers.com/images/walls/thumbs_3t/2966.png	

Cyberpunk 2077	Um RPG de ação futurista ambientado em Night City.	2020-12-10	PlayStation 5	https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg	
FIFA 22	Um jogo de simulação de futebol com times e jogadores reais.	2022-10-01	Xbox Series X	https://w0.peakpx.com/wallpaper/324/935/HD-wallpaper-kylian-mbappe-fifa-22.jpg	

Minecraft	Um jogo de construção e aventura em um mundo pixelizado.	2011-11-18	PC	https://www.psu.com/wp/wp-content/uploads/2020/09/Minecraft-PS4-Wallpapers-16.jpg	

Call of Duty: Warzone	Um jogo de tiro em primeira pessoa com modo battle royale.	2020-03-10	PlayStation 4	https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg	

The Witcher 3: Wild Hunt	Um jogo de RPG de ação em mundo aberto com uma história envolvente.	2015-05-19	PlayStation 4	https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/t/the-witcher-3-wild-hunt-switch/hero	

Assassins Creed Valhalla	Um jogo de ação e aventura ambientado na era dos vikings.	2020-11-10	PC	https://meups.com.br/wp-content/uploads/2020/05/Assassins-Creed-Valhalla-2.jpg	

Grand Theft Auto V	Um jogo de ação em mundo aberto com uma história envolvente.	2013-09-17	Xbox One	https://www.papeldeparede.etc.br/fotos/wp-content/uploads/grand_theft_auto_gta_5.jpg	

Battlefield 3	Um jogo de tiro em primeira pessoa que se passa em um cenário de guerra moderna.	

-- const express = require('express');
-- const app = express();
-- const port = 3000;

-- const { Pool } = require('pg');
-- const pool = new Pool({
--   user: 'seu_usuario',
--   host: 'localhost',
--   database: 'seu_banco_de_dados',
--   password: 'sua_senha',
--   port: 5432,
-- });

-- app.use(express.json());

-- app.post('/cadastrar-usuario', async (req, res) => {
--   const { usuario, senha } = req.body;

--   try {
--     const query = 'INSERT INTO autenticacao (usuario, senha, tipo) VALUES ($1, $2, $3)';
--     await pool.query(query, [usuario, senha, 'tipo_usuario']);

--     res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
--   } catch (error) {
--     console.error(error);
--     res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
--   }
-- });

-- app.listen(port, () => {
--   console.log(`Servidor rodando na porta ${port}`);
-- });




INSERT INTO autenticacao (usuario, senha, tipo) VALUES ('admin', 'admin', 'admin');

