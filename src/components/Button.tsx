import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    kbd?: string | ReactNode;
    isGlitch?: boolean;
    'aria-label'?: string;
    'data-action'?: string;
    popovertarget?: string;
    popovertargetaction?: 'show' | 'hide' | 'toggle' | 'close';
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
}

const CORNER_SIZE = '12px';
const BORDER_WIDTH = '1px';

const CLIP_PATH = css`
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - ${CORNER_SIZE}),
    calc(100% - ${CORNER_SIZE}) 100%,
    0% 100%
  );
`;

const getAccentColor = (variant?: string): string => {
    switch (variant) {
        case 'secondary':
            return 'hsl(210 100% 57%)';
        case 'danger':
            return 'hsl(0 100% 50%)';
        default:
            return 'hsl(0 100% 57%)';
    }
};

const getShadowColor = (variant?: string): string => {
    switch (variant) {
        case 'secondary':
            return 'hsl(210 100% 60%)';
        case 'danger':
            return 'hsl(0 100% 60%)';
        default:
            return 'hsl(0 100% 60%)';
    }
};

const getPaddingSize = (size?: string): string => {
    switch (size) {
        case 'small':
            return 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.25rem, 0.5vw, 0.5rem)';
        case 'large':
            return 'clamp(0.75rem, 1.5vw, 1.25rem) clamp(0.75rem, 1.5vw, 1.25rem)';
        default:
            return 'clamp(0.5rem, 1vw, 0.75rem) clamp(0.5rem, 1vw, 0.9rem)';
    }
};

const getFontSize = (size?: string): string => {
    switch (size) {
        case 'small':
            return 'clamp(0.6rem, 0.8vw, 0.8rem)';
        case 'large':
            return 'clamp(1rem, 1.5vw, 1.5rem)';
        default:
            return 'clamp(0.7rem, 1vw, 1rem)';
    }
};

const responsiveStyles = css`
  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

const glitchStyles = css`
  --shimmy-distance: 5;
  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);

  &:hover .glitch,
  &:focus-visible .glitch {
    display: flex;
    animation: glitch 2s infinite;

    .backdrop {
      background: canvas;
    }
  }

  .glitch {
    display: none;
  }

  @keyframes glitch {
    0% { clip-path: var(--clip-one); }
    2%, 8% { clip-path: var(--clip-two); transform: translate(calc(var(--shimmy-distance) * -1%), 0); }
    6% { clip-path: var(--clip-two); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
    9% { clip-path: var(--clip-two); transform: translate(0, 0); }
    10% { clip-path: var(--clip-three); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
    13% { clip-path: var(--clip-three); transform: translate(0, 0); }
    14%, 21% { clip-path: var(--clip-four); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
    25% { clip-path: var(--clip-five); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
    30% { clip-path: var(--clip-five); transform: translate(calc(var(--shimmy-distance) * -1%), 0); }
    35%, 45% { clip-path: var(--clip-six); transform: translate(calc(var(--shimmy-distance) * -1%)); }
    40% { clip-path: var(--clip-six); transform: translate(calc(var(--shimmy-distance) * 1%)); }
    50% { clip-path: var(--clip-six); transform: translate(0, 0); }
    55% { clip-path: var(--clip-seven); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
    60% { clip-path: var(--clip-seven); transform: translate(0, 0); }
    31%, 61%, 100% { clip-path: var(--clip-four); }
  }
`;

const ButtonContainer = styled.button<{
    $isGlitch?: boolean;
    $variant?: string;
    $size?: string;
    $fullWidth?: boolean;
}>`
  --corner: ${CORNER_SIZE};
  --border: ${BORDER_WIDTH};
  --accent: ${({ $variant }) => getAccentColor($variant)};
  --shadow: ${({ $variant }) => getShadowColor($variant)};

  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #0e0f17;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  padding: ${({ $size }) => getPaddingSize($size)};
  font-family: 'Cyber', sans-serif;
  font-size: ${({ $size }) => getFontSize($size)};
  text-align: center;
  text-transform: uppercase;
  color: var(--accent);
  border: 0;
  cursor: pointer;
  outline: none;

  * {
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    color: canvas;

    kbd {
      color: var(--accent);
    }

    .backdrop {
      background: var(--accent);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${CLIP_PATH}
  ${({ $isGlitch }) => $isGlitch && glitchStyles}
  ${responsiveStyles}
`;

const Backdrop = styled.span`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: light-dark(hsl(0 0% 100% / 0.4), hsl(0 0% 0% / 0.4));
  backdrop-filter: saturate(180%) blur(6px);
  pointer-events: none;
  ${CLIP_PATH}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent);
    border: var(--border) solid transparent;
    ${CLIP_PATH}
    mask: 
      linear-gradient(transparent 0% 100%), 
      linear-gradient(white 0% 100%);
    mask-clip: padding-box, border-box;
    mask-repeat: no-repeat;
    mask-composite: intersect;
    z-index: 2;
  }

  .corner {
    position: absolute;
    bottom: 0;
    right: 0;
    width: var(--corner);
    height: var(--corner);

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: calc(var(--border) * 2);
      background: var(--accent);
      transform: translate(-50%, -50%) rotate(135deg);
    }
  }
`;

const KeyBadge = styled.kbd`
  display: inline-grid;
  place-items: center;
  width: 20px;
  aspect-ratio: 1;
  font-size: 8px;
  font-weight: bold;
  color: canvas;
  background: var(--accent);
  border-radius: 50%;

  svg {
    width: 65%;
  }
`;

const GlitchContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  color: var(--accent);
  text-shadow: 0 1px var(--shadow);
  pointer-events: none;

  kbd {
    opacity: 0;
  }

  .backdrop {
    background: canvas;
  }
`;

const LettersContainer = styled.span`
  display: flex;
  color: hsl(0 100% 57%);

  span:nth-of-type(2),
  span:nth-of-type(5) {
    scale: 1 -1;
  }

  span:nth-of-type(3),
  span:nth-of-type(6),
  span:nth-of-type(7) {
    scale: -1 -1;
  }
`;

export const Button: React.FC<ButtonProps> = ({
    children,
    kbd,
    className,
    isGlitch = false,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    ...props
}) => {
    const letters = typeof children === 'string' ? children.split('') : [];

    return (
        <ButtonContainer
            $isGlitch={isGlitch}
            $variant={variant}
            $size={size}
            $fullWidth={fullWidth}
            className={className}
            {...props}
        >
            <Backdrop>
                <span className="corner" />
            </Backdrop>

            {kbd && <KeyBadge>{kbd}</KeyBadge>}
            <span>{children}</span>

            <GlitchContainer className="glitch" aria-hidden="true">
                <Backdrop>
                    <span className="corner" />
                </Backdrop>
                <KeyBadge>水</KeyBadge>
                <LettersContainer>
                    {letters.map((char, index) => (
                        <span key={index}>{char}</span>
                    ))}
                </LettersContainer>
            </GlitchContainer>
        </ButtonContainer>
    );
};

export default Button;