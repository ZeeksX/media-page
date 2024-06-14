<template>
    <div id="particles">
        <vue-particles
            id="tsparticles" 
            @particlesLoaded="particlesLoaded" 
            :options="options" 
        />
    </div>
</template>

<script>
export default {
    name: 'CustomParticles',
    data() {
        return {
            options: {
                background: {
                    color: {
                        value: ''
                    }
                },
                fullScreen: false,
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push'
                        },
                        onHover: {
                            enable: false,
                            mode: 'repulse'
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.1,
                            size: 40
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#000000'
                    },
                    links: {
                        color: '#000000',
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 0.8
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: 'bounce',
                        random: true,
                        speed: 5,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 200
                    },
                    opacity: {
                        value: 0.1
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: { min: 1, max: 3 }
                    }
                },
                detectRetina: true
            }
        };
    },
    methods: {
        async particlesLoaded(container) {
            console.log("Particles container loaded", container);
        }
    }
}
</script>

<style scoped>
#particles {
    width: 100%;
    height: 800px;
    position: absolute;
    top: 0;
    z-index: -1;
}

#tsparticles {
    height: 100%;
}
</style>
