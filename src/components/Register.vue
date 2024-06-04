<template>
  <div class="form-signin w-50 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal text-center">Please Register</h1>

      <Input :label="'Your name'" :type="'text'" :placeholder="'Name'" />
      <Input :label="'Email address'" :type="'email'" :placeholder="'email'" />
      <Input :label="'Pasword'" :type="'password'" :placeholder="'Password'" />
      <Button type="submit">Register</Button>

    </form>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
