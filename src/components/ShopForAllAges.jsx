import React from 'react';

const ageGroups = [
  {
    label: '0-12 months',
    color: '#F26E6C',
    img: '/src/assets/LandlingPageImg/0-12mon.png',
  },
  {
    label: '1-3 years',
    color: '#FAA41B',
    img: '/src/assets/LandlingPageImg/1-3year.png',
  },
  {
    label: '3-5 years',
    color: '#52BDFF',
    img: '/src/assets/LandlingPageImg/3-5year.png',
  },
  {
    label: '5+ years',
    color: '#6AC46A',
    img: '/src/assets/LandlingPageImg/5+year.png',
  },
];

const ShopForAllAges = () => (
  <section
    style={{
      background: '#F5F4F5',
      padding: '2.5rem 1rem',
      margin: '0 auto',
      maxWidth: '1200px',
      borderRadius: '2rem',
      boxShadow: '0 4px 24px 0 rgba(155, 212, 255, 0.12)',
    }}
    aria-label="Shop For All Ages"
  >
    <h2
      style={{
        fontFamily: 'Colby Condensed, serif',
        fontSize: '2.5rem',
        color: '#222D65',
        textAlign: 'center',
        marginBottom: '0.5rem',
        letterSpacing: '0.02em',
      }}
    >
      FUN FOR <span style={{ fontStyle: 'italic', color: '#222D65' }}>All Ages</span>
    </h2>
    <p style={{ textAlign: 'center', color: '#222D65', fontWeight: 600, fontSize: '1.2rem', marginBottom: '2rem' }}>
      Toys for kids of every age, stage, and ability!
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
      {ageGroups.map(({ label, color, img }) => (
        <a
          key={label}
          href={`/shop?age=${encodeURIComponent(label)}`}
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 160, cursor: 'pointer' }}
          aria-label={`Shop toys for ${label}`}
        >
          <img
            src={img}
            alt={label}
            style={{ width: 140, height: 140, objectFit: 'contain', marginBottom: '1rem', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 8px 0 rgba(155, 212, 255, 0.10)', transition: 'transform 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div
            style={{
              background: color,
              borderRadius: '2rem',
              padding: '0.75rem 2rem',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#222D65',
              boxShadow: '0 2px 8px 0 rgba(155, 212, 255, 0.10)',
              textAlign: 'center',
              marginBottom: '1rem',
              minWidth: 120,
              transition: 'transform 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {label}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default ShopForAllAges;
