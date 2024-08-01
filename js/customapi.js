

                 // agents api function 


    const API_AGENT = 'https://valorant-api.com/v1/agents';

    async function fetchAgents() {
        try {
            const response = await fetch(API_AGENT);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching agents:', error);
            return [];
        }
    }

    async function updateBanners() {
        const agents = await fetchAgents();
        const container = document.getElementById('agent-banners');

        // Clear the container before adding new content
        container.innerHTML = '';

        agents.forEach(agent => {
            const banner = document.createElement('div');
            banner.className = 'col-sm-10 col-md-8 col-lg-4 m-l-r-auto';

            banner.innerHTML = `
                <div class="block1 hov-img-zoom pos-relative m-b-30">
                    <img src="${agent.fullPortraitV2}" alt="${agent.displayName}">
                    <div class="block1-wrapbtn w-size2">
                        <a href="" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                            ${agent.displayName}
                        </a>
                    </div>
                </div>
            `;

            container.appendChild(banner);
        });
    }

    updateBanners();







    




