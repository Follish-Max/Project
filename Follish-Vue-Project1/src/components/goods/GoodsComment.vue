<template>
    <div>
        <cmtbox :id="0"></cmtbox>
        <!--<cmtbox :id="$route.params.id"></cmtbox>-->
    </div>
</template>

<script>
import cmtbox from '../subcomponents/comment.vue';
export default {
    components: {
        cmtbox
    }
}
</script>

<style lang="scss" scoped>

</style>