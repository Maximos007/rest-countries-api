<template>
  <div class="search-bar">
    <img
      v-if="themeStore.getCurrentTheme === 'light'"
      src="@/assets/search_light_24dp.svg"
      class="search-bar__icon"
      alt="Magnifying Glass"
    />
    <img
      v-else
      src="@/assets/search_dark_24dp.svg"
      class="search-bar__icon"
      alt="Magnifying Glass"
    />
    <input
      type="text"
      class="input search-bar__input"
      placeholder="Search for a country..."
      @keyup.enter="
        (e) =>
          router.push({ name: 'search', params: { search: e.target.value } })
      "
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/store/theme'
const router = useRouter()
const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  width: 100%;
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: 350px;
  }

  @media (min-width: 1440px) {
    max-width: 480px;
  }

  &__icon {
    color: var($--theme-font-color);

    position: absolute;
    top: 50%;
    left: 2rem;

    transform: translateY(-50%);

    opacity: var($--theme-placeholder-opacity);
  }

  &__input {
    @include fluid-type(12, 14, 375, 1440);
    font-family: $font-family;

    padding-left: 4.5rem;
    padding-right: 1.125rem;
    width: 100%;
    transition: color 0.2s ease, background-color 0.2s ease, box-shadow 300ms;

    &:focus {
      box-shadow: 0px 3px 14px 1px rgba(0, 0%, 0%, 0.0875);
    }
  }
}

::placeholder {
  color: var($--theme-font-color);

  opacity: var($--theme-placeholder-opacity);
  letter-spacing: 0.01rem;
}
</style>
