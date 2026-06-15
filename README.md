# 🌱 Harvest - Sustainable Agriculture Dashboard

A modern, AI-powered sustainable agriculture dashboard designed to help smallholder farmers optimize crop yields, manage water resources, and make data-driven farming decisions. Built with Next.js, Supabase, and Tailwind CSS.

![Harvest Dashboard](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inspooo-vG05PiEcV0bmM623C0XtqjfukpdsNA.jpg)

## 🚀 live link
- https://v0-sustainable-agriculture-dashboar-seven.vercel.app/

## ✨ Features

### 📊 Dashboard Overview
- **Real-time Weather Monitoring** - Track temperature, humidity, and wind conditions
- **Plant Growth Tracking** - Monitor crop development through different growth stages
- **Production Analytics** - Compare current vs. previous year production with interactive charts
- **Quick Stats** - View total yield, water savings, active farms, and soil health at a glance
- **Recent Activity Feed** - Stay updated with latest farming activities and events

### 📈 Advanced Analytics
- **Yield Trend Predictions** - AI-powered forecasting for crop yields
- **Water Usage Optimization** - Track and optimize irrigation efficiency
- **Soil Health Analysis** - Comprehensive radar charts for NPK levels and pH monitoring
- **Crop Distribution** - Visual breakdown of crop types across your farms

### 🌾 Harvest Optimization
- **AI-Powered Insights** - Personalized recommendations based on weather, soil, and crop data
- **Farming Action Tasks** - Prioritized to-do list for optimal farm management
- **Predictive Growth Analytics** - Track expected vs. actual crop development
- **Impact Simulator** - Visualize the effects of different farming decisions

### 📅 Schedules Management
- **Planting Calendar** - Track planting dates and crop lifecycles
- **Irrigation Schedules** - Automated watering reminders and optimization
- **Harvest Planning** - Forecast harvest dates and quantities

### 💰 Payments & Finance
- **Transaction History** - Track all income and expenses
- **Payment Methods** - Manage multiple payment options
- **Financial Analytics** - Monitor revenue trends and profitability

### ⚙️ Settings & Configuration
- **Profile Management** - Update farm and personal information
- **Notification Preferences** - Customize alerts and reminders
- **Appearance Settings** - Light/dark mode and language options
- **Security Controls** - Two-factor authentication and password management

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **TypeScript**: Type-safe development

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Supabase account and project
- Git for version control

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone <your-repo-url>
cd harvest-dashboard
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with your Supabase credentials:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

These variables are automatically provided when you connect Supabase integration in v0.

### 4. Set Up the Database

Run the SQL scripts to create tables and seed initial data:

**Option A: Using v0 (Recommended)**
1. Click "Run Script" for `scripts/001_create_tables.sql`
2. Click "Run Script" for `scripts/002_seed_data.sql`

**Option B: Using Supabase Dashboard**
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and run `scripts/001_create_tables.sql`
4. Copy and run `scripts/002_seed_data.sql`

### 5. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## 📁 Project Structure

\`\`\`
harvest-dashboard/
├── app/
│   ├── analytics/          # Analytics page with charts
│   ├── harvest/            # AI recommendations and optimization
│   ├── schedules/          # Planting and irrigation schedules
│   ├── payments/           # Financial tracking
│   ├── settings/           # User settings and preferences
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Dashboard home page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── analytics/          # Analytics-specific components
│   ├── harvest/            # Harvest optimization components
│   ├── sidebar.tsx         # Navigation sidebar
│   ├── weather-card.tsx    # Weather display
│   ├── production-chart.tsx # Production comparison chart
│   └── ...                 # Other reusable components
├── lib/
│   └── supabase/
│       ├── client.ts       # Browser Supabase client
│       └── server.ts       # Server Supabase client
├── scripts/
│   ├── 001_create_tables.sql  # Database schema
│   └── 002_seed_data.sql      # Sample data
└── public/                 # Static assets
\`\`\`

## 🗄️ Database Schema

The application uses the following main tables:

- **farms** - Farm information and metadata
- **crops** - Crop tracking and growth stages
- **weather_data** - Historical weather records
- **soil_readings** - Soil health measurements (NPK, pH, moisture)
- **recommendations** - AI-generated farming recommendations
- **activities** - Recent farming activities and events
- **production_data** - Monthly production tracking
- **schedules** - Planting and irrigation schedules
- **transactions** - Financial records

All tables include Row Level Security (RLS) policies for data protection.

## 🎨 Design System

The dashboard uses a nature-inspired color palette:

- **Primary**: Forest Green (`#1a4d2e`)
- **Accent**: Lime Yellow (`#d4ff00`)
- **Neutrals**: Warm grays and off-whites
- **Typography**: Geist Sans (body), Geist Mono (code)

## 🔧 Development

### Adding New Features

1. Create new components in the `components/` directory
2. Add new pages in the `app/` directory
3. Update database schema in new SQL migration files
4. Follow the existing patterns for Supabase data fetching

### Code Style

- Use TypeScript for type safety
- Follow React Server Components patterns
- Use Tailwind CSS utility classes
- Keep components small and focused
- Use semantic HTML elements

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern agricultural platforms
- Built with [v0](https://v0.dev) by Vercel
- Icons by [Lucide](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)

## 📞 Support

For support, please send an email to ezraktoo09@gmail.com.

---

Built with 💚 for sustainable agriculture and smallholder farmers worldwide.
