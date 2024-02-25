<template>
    <div>
        <h1>前台頁面</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/about">About</RouterLink> |
            <RouterLink to="/cart">購物車</RouterLink> |
            <RouterLink to="/product">字型</RouterLink> |
            <RouterLink to="/admin">後台</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>
