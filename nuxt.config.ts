import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://nuxt.com/docs/api/configuration/nuxt-config 
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        { // Bootstrap
          rel: "stylesheet",
          href: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        },
        { // Bootstrap icons
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        },
        { // Custom
          rel: "stylesheet",
          href: "/css/custom.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  components: false,
  css: [
    'vue-toastification/dist/index.css' 
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  router: {
    options: {
      hashMode: false
    }
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: "0x03C397106e9aC689900F2F8123A3a142e97B3396",
      airdropApAddress: "", // chat token claim for APs
      airdropClaimDomainsAddress: "", // chat token claim for domain holders
      blockExplorerBaseUrl: "https://basescan.org/",
      chatChannels: { // go to Orbis Dashboard (https://useorbis.com/dashboard), create a new Project and then create a new Context for each of the channels below
        "general": "kjzl6cwe1jw145m2n4uqeplllcj7wm1pffhytt53v0vu41f9b3y05nwut431nxc", // general discussion channel
        "memesImages": "kjzl6cwe1jw1488f4zann5c4jqqxsusw5u035l1j84yswekkggoo8emx4di6hrb",
        "shill": "kjzl6cwe1jw14bljrkf8jes33tbn3trqx6vno7nmhsl054ugyiuyaj36pkfhgu2",
        "nftLaunchpad": "kjzl6cwe1jw145adz3b72rj7xv8wfmlyxfsg3v205yzkekgjoiodd3mnbtx8tdk",
        "friendKeys": "kjzl6cwe1jw14ac14sroiiftz84ipn0mrpn418d663uh5d4o2z1ay1qntpx32rp",
      },
      chatTokenAddress: "", // chat token address
      chatTokenImage: "", // chat token image
      chatTokenSymbol: "", // chat token symbol or name
      domainRequiredToPost: true,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      favicon: "/img/favicon.png",
      fileUploadEnabled: true, // enable/disable file uploads (enable only if external file storage is used, e.g. IPFS via Spheron)
      fileUploadSizeLimit: 1 * 1024 * 1024, // max file upload size in bytes (1 * 1024 * 1024 = 1 MB)
      fileUploadTokenService: process.env.FILE_UPLOAD_SERVICE || "netlify", // "netlify" or "vercel" (or leave empty for no file uploads)
      getPostsLimit: 30, // number of posts to fetch from Orbis in the getPosts() function
      governanceUrl: "", // governance url (snapshot, Tally, etc.)
      iggyPostAddress: "0x50d0076427adFF15cC7a510E82de9BAC13f802EC",
      iggyPostMinterAddress: "0x0b379b1A8ff560a9d1ad8c2A42F969Ca0079CB5d",
      iggyPostStatsAddress: "0xCFdA326290cFc0E4C9a12278fe42eFB9f840ce49",
      imagekitEndpoint: process.env.IMAGEKIT_ENDPOINT,
      imagekitPublicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      ipfsGateway: "https://cloudflare-ipfs.com/ipfs/",
      keysAddress: "0xC5A78c248b6aEA90Ed2c71494f7058e303a37aa4", // FriendKeys contract address 
      keysFeatured: ["tempe", "tekr"],
      linkPreviews: process.env.LINK_PREVIEW_SERVICE || "netlify", // "netlify", "vercel", or "microlink" (or leave empty for no link previews)
      lpTokenAddress: "", // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: "LP tokens", // LP token symbol
      marketplacePostNftUrl: "https://opensea.io/assets/base/0x50d0076427adFF15cC7a510E82de9BAC13f802EC",
      marketplacePostNftItemUrl: "https://opensea.io/assets/base/0x50d0076427adFF15cC7a510E82de9BAC13f802EC/", // url (append nft id to it)
      marketplaceNftCollectionBaseUrl: "https://opensea.io/assets/base/", // url (append nft address to it)
      newsletterLink: "",
      nftDefaultRatio: 1, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: "0xAD3CB40eF687De7952505B985834606d768D59B7", // NFT launchpad with bonding curve contract address
      nftLaunchpadLatestItems: 8, // number of latest NFTs to show in the NFT launchpad
      orbisTest: false, // if true, test context will be used instead of the production one
      orbisTestContext: "kjzl6cwe1jw145tfqv2eqv8tiz6puo27meyz4smz40atppuc13tulqca87k35z2", // test context
      previewImage: "/img/covers/cover.png",
      previewImageAirdrop: "/img/covers/cover-airdrop.png",
      previewImageNftCollection: "/img/covers/cover-nft-collection.png",
      previewImageNftCreate: "/img/covers/cover-nft-create.png",
      previewImageNftLaunchpad: "/img/covers/cover-nft-launchpad.png",
      previewImagePost: "/img/covers/cover-post.png",
      previewImagePostNft: "/img/covers/cover-post-nft.png",
      previewImageProfile: "/img/covers/cover-profile.png",
      previewImageStake: "/img/covers/cover-stake.png",
      profileMintedPostIdsMax: 36, // max number of minted post ids to show in the profile page
      projectMetadataTitle: "Based Chat | Decentralized chat for the Based Nouns community",
      projectName: "Based Chat",
      projectDescription: "Based Chat is a decentralized chat for the Based Nouns community. It's a place where you can chat, mint and launch NFTs, and more.",
      projectTwitter: "https://twitter.com/basednouns",
      projectUrl: "https://chat.basednames.xyz", // without trailing slash!
      punkMinterAddress: "0x16dE409173106E99533b1F73d0f7982a22a5435a", // punk domain minter contract address
      punkNumberOfPrices: 6, // number of different prices (based on domain length), usually 1 (price()) or 5 (price1char() - price5char())
      punkTldAddress: "0x273dB54929d8392c1997Be361Da89D41af202a49", // punk domain TLD address
      randomPostsNumber: 1, // number of random post NFTs to show in the sidebar widget
      rpcCustom: process.env.RPC_CUSTOM || "", // Custom RPC URL
      showFeatures: { // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        "activityPoints": true, 
        "airdrop": false, 
        "friendKeys": false, 
        "governance": false,
        "newsletter": false, 
        "nftLaunchpad": false, 
        "randomMintedPosts": true, 
        "searchPosts": false, 
        "swap": false, 
        "stake": false, 
        "sendTokens": false, 
        "spotify": false
      }, 
      showRepliesOnHomepage: true, // show replies on the homepage  
      sidebarLeftSticky: true, // make the left sidebar sticky (always visible)
      spotifyPlaylistId: "5y7f2Wxfq49G5KuNQfMPbk", // enter just the ID of the playlist (not the full URL)  
      stakingContractAddress: "", // this is also the stake/gov token address
      stakeTokenSymbol: "IGT", // stake token symbol (governance token symbol)
      supportedChainId: 8453,
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      swapRouterAddress: "", // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || "",
      tldName: ".based",
      tokenAddress: null, // leave null if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: "ETH"
    }
  },
  vite: {
    build: {
      target: ['es2020'] // fix big integer literals error
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'  // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,  // fix nuxt3 process
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ],
        target: "es2020" // fix big integer literals error
      }
    }
  }
})
