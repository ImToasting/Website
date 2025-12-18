<script lang="ts">
    import {timeout} from "$lib";
    import type {Key} from "@types";
    import JSConfetti from 'js-confetti'

    let shuffledKeys: Key[];
    let keysElement: HTMLElement;
    let row: string[] = [];
    let userInput: string[] = [];

    const keys: Key[] = [
        { key: 'ArrowLeft', className: 'special arrow-left' },
        { key: 'ArrowRight', className: 'special arrow-right' },
        { key: 'ArrowDown', className: 'special arrow-down' },
        { key: 'b' },
        { key: 'a' }
    ];

    function effect() {
        const jsConfetti = new JSConfetti()

        jsConfetti.addConfetti({
            emojis: ["✨", "🎉", "⭐️", "🎊"],
            emojiSize: 32
        })
    }

    function shuffleArray(array: Key[]): Key[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const keyPress: Keyframe[] = [
        {
            backgroundColor: "var(--color-text)",
            transform: "translateY(3px)",
            offset: .5
        }
    ];

    const launch: Keyframe[] = [
        {
            transformOrigin: "bottom center",
            transform: "scale3d(110%, 90%, 100%)",
            offset: .2
        },
        {
            transform: "scale3d(80%, 110%, 100%)",
            offset: .3
        },
        {
            transform: "translateY(-200%)",
            opacity: 1,
            offset: .5
        },
        {
            opacity: "0",
            offset: .51
        },
        {
            transform: "translateY(0)",
            offset: .52
        },
        {
            opacity: "0",
            offset: .8
        },
    ];

    function reset() {
        row = [];
        userInput = [];
        shuffledKeys = shuffleArray(keys);
        shuffledKeys.forEach((item) => {
            row.push(item.key);
        });
        row.push('Enter');
    }

    async function onKeyDown(e: KeyboardEvent) {
        if (userInput.length > row.length) return;

        const key = e.key.toLowerCase();
        const nextKey = row[userInput.length].toLowerCase();

        // Correct key
        if (nextKey === key) {
            keyHover(userInput.length);
            userInput.push(key);
        }
        // Wrong key
        else {
            userInput = [];
        }

        // All keys correct
        if (row.length === userInput.length) {
            userInput.push("end"); // stop event

            let keys = keysElement.children;

            // Blink all with delay
            for (const key of keys) {
                await timeout(80);
                key.animate(keyPress, {
                    duration: 100,
                });
            }

            await timeout(200);

            effect();
            reset();
        }
    }

    function keyHover(index: number) {
        const key = keysElement.children.item(index);
        if (!key) return;

        key.animate(keyPress, {
            duration: 100,
        });
    }

    reset();
</script>

<svelte:window on:keydown={onKeyDown} />

<div bind:this={keysElement} class="keys">
    {#each shuffledKeys as { key, className }}
        <kbd class={className}>{key}</kbd>
    {/each}
    <kbd class="special enter">Enter</kbd>
</div>

<style lang="scss">
  .keys {
    display: flex;
    column-gap: 10px;
  }

  kbd {
    border: 1px solid var(--color-text);
    border-radius: 100%;
    aspect-ratio: 1 / 1;
    display: inline-block;
    height: 1em;
    width: 1em;
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    line-height: 1;
    text-transform: uppercase;
    text-align: center;
    padding: .3em;
    transition: background .1s ease;
    opacity: .7;
    color: var(--color-text);

    &.special {
      color: transparent;
      position: relative;

      &::before {
        position: absolute;
        display: block;
        left: 1px;
        right: 0;
        color: var(--color-text);
        text-align: center;
        font-size: 1.2em;
        line-height: .8;
      }

      &.arrow-down::before {
        content: "↓";
      }
      &.arrow-left::before {
        content: "←";
      }
      &.arrow-right::before {
        content: "→";
      }
      &.enter::before {
        content: "↵";
      }
    }
  }

  @media screen and (max-width: 650px) {
    .keys {
      display: none;
    }
  }
</style>