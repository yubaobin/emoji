<template>
  <div class="btn-container">
    <button
      class="v-btn"
      :id="id"
      :name="name"
      :disabled="disabled"
      :data-type="btntype"
      :btntype="btntype"
      @click="handleClick">
      <slot></slot>
    </button>
    <slot name="undertext"></slot>
  </div>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btntype: {
      type: String,
      default: 'default'
    },
    width:{
      type: String
    },
    height:{
      type: String
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
$default-color: #FFF;
$default-hover-color: #FFF;
$primary-color: #22a7f0;
$primary-hover-color: #0d7cb9;
$success-color: #019875;
$success-hover-color: #01654e;
$warning-color: #f4b350;
$warning-hover-color: #e9920f;
$error-color: #d91e18;
$error-hover-color: #941410;
$disabled-color: #dadada;

@mixin button-color($color, $hover-color) {
  color: $color;
  box-shadow: 0 0 0 1px $color inset;

  &:hover {
    color: $hover-color;
    box-shadow: 0 0 0 1px $hover-color inset;
  }
}
.btn-container {
  display:inline-block;
  text-align: center;
  .v-btn {
    cursor: pointer;
    border: none;
    background: 0 0;
    border-radius: 3.5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    padding: 6px 24px;
    text-decoration: none;
    outline: 0;

    &:disabled {
      cursor: not-allowed;
      color: $disabled-color !important;
      box-shadow: 0 0 0 1px $disabled-color inset !important;
    }

    &[btntype="default"] {
      @include button-color($default-color, $default-hover-color);
    }

    &[btntype="primary"] {
      @include button-color($primary-color, $primary-hover-color);
    }

    &[btntype="success"] {
      @include button-color($success-color, $success-hover-color);
    }

    &[btntype="warning"] {
      @include button-color($warning-color, $warning-hover-color);
    }

    &[btntype="error"] {
      @include button-color($error-color, $error-hover-color);
    }
  }
  .undertext {
    margin-top: 2px;
    display: block;
  }
}
</style>
