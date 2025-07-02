import styled from "styled-components";


export const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #0f172a, #1e293b); /* dark navy-blue gradient */
  color: #e2e8f0; /* abu terang */
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
`;

// Layout hero section
export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;

// Kiri dan kanan
export const HeroLeft = styled.div`
  flex: 1;
`;

export const HeroRight = styled.div`
  flex: 1;
`;

// Judul dengan warna tegas & modern
export const HeroTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #00b4d8; /* electric blue */
`;

// Genre dengan warna maskulin abu kehitaman
export const HeroGenre = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #94a3b8;
  font-weight: 500;
`;

// Deskripsi
export const HeroDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #cbd5e1;
`;

// Tombol utama dengan efek glow
export const HeroButton = styled.button`
  background: linear-gradient(to right, #0077b6, #023e8a); /* deep blue gradient */
  border: none;
  padding: 0.7rem 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #00b4d8, #0077b6);
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 180, 216, 0.6);
  }
`;

// Gambar hero dengan bayangan elegan
export const HeroImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

// Wrapper hero
export const StyledHero = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  .hero__left {
    flex: 1;
  }

  img {
    flex: 1;
    border-radius: 1rem;
    width: 100%;
    object-fit: cover;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;
