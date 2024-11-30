import { Product } from '../types';

export const products: Record<string, Product[]> = {
  writing: [
    {
      id: 'pen-1',
      name: 'Premium Gel Pen set',
      price: 100,
      description: 'Set of 10 smooth writing gel pens with 0.5mm tip',
      image: 'https://m.media-amazon.com/images/I/610ipL2vGvL._AC_UL480_FMwebp_QL65_.jpg',
      category: 'writing'
    },
    {
      id: 'pen-2',
      name: 'Fountain Pen',
      price: 50,
      description: 'Classic design fountain pen with smooth ink flow',
      image: 'https://m.media-amazon.com/images/I/41DuFMV+a1L._SY300_SX300_.jpg',
      category: 'writing'
    },
    {
      id: 'pen-3',
      name: 'Highlighter',
      price: 130,
      description: 'Classic design fountain pen with smooth ink flow',
      image: 'https://m.media-amazon.com/images/I/61CaQRw35wL._AC_UL480_FMwebp_QL65_.jpg',
      category: 'writing'
    },
    {
      id: 'pen-4',
      name: 'Roller',
      price: 90,
      description: 'Classic design fountain pen with smooth ink flow',
      image: 'https://m.media-amazon.com/images/I/71Vo8hsuT0L._AC_UL480_FMwebp_QL65_.jpg',
      category: 'writing'
    },
    {
      id: 'pen-5',
      name: 'Colour pens',
      price: 80,
      description: 'Classic design fountain pen with smooth ink flow',
      image: 'https://m.media-amazon.com/images/I/618k-RIZB4S._AC_UL480_FMwebp_QL65_.jpg',
      category: 'writing'
    },
    {
      id: 'pen-6',
      name: 'Pentoic pen',
      price: 10,
      description: 'Classic design fountain pen with smooth ink flow',
      image: 'https://m.media-amazon.com/images/I/61WKMdxzTIL._AC_UL480_FMwebp_QL65_.jpg',
      category: 'writing'
    },
  ],
  notebooks: [
    {
      id: 'nb-1',
      name: 'Premium Spiral Notebook',
      price: 149,
      description: 'A4 size, 200 pages, hardcover spiral notebook',
      image: 'https://m.media-amazon.com/images/I/419KXo-7kDL._SX300_SY300_QL70_FMwebp_.jpg',
      category: 'notebooks'
    },
    {
      id: 'nb-2',
      name: 'Executive Diary 2024',
      price: 230,
      description: 'Professional diary with PU leather cover',
      image: 'https://m.media-amazon.com/images/I/818h1mv4Q7L._SX522_.jpg',
      category: 'notebooks'
    }
  ],
  files: [
    {
      id: 'file-1',
      name: 'Premium Ring Binder',
      price: 200,
      description: 'A4 size ring binder with 2-inch capacity',
      image: 'https://m.media-amazon.com/images/I/71wbwNsM2nL._AC_UL480_FMwebp_QL65_.jpg',
      category: 'files'
    },
    {
      id: 'file-2',
      name: 'Document Organizer',
      price: 45,
      description: 'Multi-pocket expanding file organizer',
      image: 'https://i.pinimg.com/736x/34/f5/6d/34f56d2c9ca2a18610eea316df7cb3cc.jpg',
      category: 'files'
    }
  ],
  art: [
    {
      id: 'art-1',
      name: 'Professional Color Pencils',
      price: 60,
      description: '24 vibrant colors for artistic expression',
      image: 'https://m.media-amazon.com/images/I/51WcMaBnlEL._AC_UL480_FMwebp_QL65_.jpg',
      category: 'art'
    },
    {
      id: 'art-2',
      name: 'Watercolor Set',
      price: 250,
      description: '12 premium watercolor paints with brush',
      image: 'https://m.media-amazon.com/images/I/51Ww-fLsA+L._SY300_SX300_.jpg',
      category: 'art'
    }
  ],
  office: [
    {
      id: 'off-1',
      name: 'Stapler Set',
      price: 85,
      description: 'Heavy-duty stapler with 1000 staples',
      image: 'https://m.media-amazon.com/images/I/31Gvm4ynt3L._SY300_SX300_QL70_FMwebp_.jpg',
      category: 'office'
    },
    {
      id: 'off-2',
      name: 'Desk Organizer',
      price: 399,
      description: 'Multi-compartment desk organizer',
      image: 'https://m.media-amazon.com/images/I/515lLN2ZjJL._SY300_SX300_QL70_FMwebp_.jpg',
      category: 'office'
    },
    {
      id: 'off-3',
      name: 'Assignment sheet',
      price: 50,
      description: 'A4 size assignment sheets',
      image: 'https://m.media-amazon.com/images/I/41LOoCGSUPL._SX300_SY300_QL70_FMwebp_.jpg',
      category: 'office'
    }
  ]
};