import { ImageResponse } from 'next/og';

import { portfolio } from '@/lib/portfolio';
import { getSiteUrl } from '@/lib/site';

export const runtime = 'edge';

export const alt = `${portfolio.name} — ${portfolio.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const siteUrl = getSiteUrl();
  const profileSrc = `${siteUrl}${portfolio.profileImage}`;

  const [fontRegular, fontBold] = await Promise.all([
    fetch(
      'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbD2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yQx6dN4.woff',
    ).then((res) => res.arrayBuffer()),
    fetch(
      'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yQx89dzeg.woff',
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0a0a0a',
          color: '#eaeaea',
          fontFamily: 'JetBrains Mono',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 0%, rgba(0, 255, 102, 0.08), transparent 45%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.35,
            backgroundImage:
              'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div
          style={{
            display: 'flex',
            flex: 1,
            padding: '56px 64px',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 48,
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              maxWidth: 720,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 28,
                fontSize: 18,
                color: '#888',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: '#00ff66',
                }}
              />
              <span>AVAILABLE · {portfolio.availability}</span>
            </div>

            <div
              style={{
                fontSize: 28,
                color: '#888',
                marginBottom: 8,
              }}
            >
              $ hi, I&apos;m
            </div>

            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: '#00ff66',
                lineHeight: 1.05,
                marginBottom: 20,
              }}
            >
              {portfolio.firstName}
            </div>

            <div
              style={{
                fontSize: 26,
                color: '#bdbdbd',
                marginBottom: 24,
                lineHeight: 1.4,
              }}
            >
              {portfolio.role} · {portfolio.titleLine}
            </div>

            <div
              style={{
                fontSize: 22,
                color: '#8a8a8a',
                lineHeight: 1.55,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {portfolio.summary}
            </div>

            <div
              style={{
                marginTop: 32,
                fontSize: 20,
                color: '#666',
              }}
            >
              {portfolio.domain}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                borderRadius: 20,
                border: '2px solid rgba(0, 255, 102, 0.35)',
                overflow: 'hidden',
                boxShadow: '0 0 40px rgba(0, 255, 102, 0.12)',
              }}
            >
              <img
                src={profileSrc}
                alt={portfolio.name}
                width={280}
                height={350}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'JetBrains Mono', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: fontBold, weight: 700, style: 'normal' },
      ],
    },
  );
}
