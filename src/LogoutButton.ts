import { html, css, LitElement, svg } from 'lit';
import { property } from 'lit/decorators.js';


export class LogoutButton extends LitElement {
  static styles = css`
    :host {
      --primary: hsl(211, 100%, 76%);
      --primary-100: hsl(211, 100%, 81%);
      --primary-200: var(--primary);
      --primary-300: hsl(211, 100%, 49%);

      position: relative;
    }

    .anchor {
      display: block;
      position: relative;
      text-decoration: none;
      transition: transform 200ms ease;
    }

    .anchor:hover {
      transform: scale3d(1.02, 1.02, 1);
    }

    .anchor:hover.anchor:after  {
      transform: scale3d(1, 1, 1);
    }

    .anchor:after {
      position: absolute;
      content: '';
      inset: 0;
      box-shadow: 0px 7px 11px 0px rgba(0,0,0,0.21);
      border-radius: 5px;
      transition: transform 200ms ease;
      transform: scale3d(0.9, 0.9, 1);
    }

    .content {
      position: relative;
      display: flex;
      justify-content: center;
      padding: 25px;
      z-index: 1;
      background: var(--primary);
      border-radius: 5px;
      color: var(--primary-300);
      font-size: 18px;
      font-weight: 700;
      font-family: sans-serif;
      text-decoration: none;
    }

    .hand-wrapper {
      --size: 50px;
      --overlap: 10px;
      --offset: calc(var(--size) - var(--overlap));
      --rotation: 90deg;
      --delay: 0s;
      --scale: 1;

      position: absolute;
      width: 50px;
      transform: rotate(var(--rotation)) translate3d(-50%, 100%, 0) scale(0.5);
      transition: transform 200ms var(--delay)  ease;
    }

    .hand-wrapper[data-position-x="right"] {
      --rotation: 90deg;

      top: 50%;
      right: calc(var(--offset) * -1);
    }

    .hand-wrapper[data-position-x="left"] {
      --rotation: -90deg;

      bottom: 50%;
      left: calc(var(--offset) * -1);
    }

    .hand-wrapper[data-position-x="center"] {
      --rotation: 0deg;
      --center-offset: 0%;

      left: calc(50% + var(--center-offset));
      top: calc(-50% + var(--overlap));
    }

    .hand {
      transition: transform 200ms ease;
      animation: example 1.5s var(--delay) ease-out infinite;
      transform-origin: bottom;
    }

    .anchor:hover .hand-wrapper {
      transform: rotate(var(--rotation)) translate3d(-50%, 0, 0) scale(var(--scale));
    }


    @keyframes example {
      0% {
        rotate: 0deg;
      }

      10% {
        rotate: -1deg;
      }

      20% {
        rotate: 2deg;
      }

      30% {
        rotate: -2deg;
      }

      40% {
        rotate: 15deg;
      }

      50% {
        rotate: -15deg;
      }

      60% {
        rotate: 5deg;
      }

      70% {
        rotate: -2deg;
      }

      80% {
        rotate: 2deg;
      }

      90% {
        rotate: -1deg;
      }

      100% {
        rotate: 0deg;
      }
    }
  `;

  @property({ type: String }) href = '';

  render() {
    const content = svg` <path d="M0 200H200V-1.43051e-06H0V200Z" fill="url(#pattern0)"/> <defs> <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_14_3" transform="scale(0.00625)"/> </pattern> <image id="image0_14_3" width="160" height="160" xlink:href="data:image/png;base64,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"/> </defs>`;


    return html`
      <a class="anchor" href="${this.href}">
        <span class="content">
          <slot></slot>
        </span>
        <div data-position-x="right" class="hand-wrapper">
          <svg class="hand" viewBox="0 0 200 200" fill="none">
            ${content}
          </svg>
        </div>
        <div data-position-x="left" style="--overlap: 20px; --rotation: -80deg; --delay: 50ms" class="hand-wrapper">
          <svg class="hand" viewBox="0 0 200 200" fill="none">
            ${content}
          </svg>
        </div>
        <div data-position-x="center" style="--overlap: 0px; --delay: 300ms" class="hand-wrapper">
          <svg class="hand" viewBox="0 0 200 200" fill="none">
            ${content}
          </svg>
        </div>
        <div
        data-position-x="center"
        style="--center-offset: 30%;--rotation: 30deg; --overlap: 10px; --delay: 150ms; scale: 0.8"
        class="hand-wrapper">
          <svg class="hand" viewBox="0 0 200 200" fill="none">
            ${content}
          </svg>
        </div>
        <div
        data-position-x="center"
        style="--center-offset: -30%; --rotation: -30deg; --overlap: -10px; --delay: 20ms; scale: 0.8"
        class="hand-wrapper">
          <svg class="hand" viewBox="0 0 200 200" fill="none">
            ${content}
          </svg>
        </div>
      </a>
    `;
  }
}
