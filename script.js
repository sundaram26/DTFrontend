const projectData = {																						
    "_id": {																						
        "$oid": "63b64dc9e3b230ebb60a495d"																						
    },																						
    "_key": "topic:2085",																						
    "category": "Course",																						
    "cid": {																						
        "$numberDouble": "NaN"																						
    },																						
    "commitment": "4 hours",																						
    "commitment_type": "custom",																						
    "deadline": "",																						
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",																						
    "faqs": [],																						
    "globalTags": [],																						
    "isActive": true,																						
    "lastposttime": 0,																						
    "learning_outcomes": [																						
        "Bare minimum knowledge of project management",																						
        "4SA Concept",																						
        "Would be able to handle any project efficiently"																						
    ],																						
    "mainPid": 0,																						
    "postcount": 0,																						
    "pre_requisites": [																						
        "An open mind to learn any concept",																						
        "Thought of Unlearning and Relearning "																						
    ],																						
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",																						
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",																						
    "slug": "2085/technical-project-management",																						
    "status": "published",																						
    "tasks": [																						
        {																						
            "task_id": 18882,																						
            "task_title": "Explore the world of management",																						
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",																						
            "status": "notworkyet",																						
            "assets": [																						
                {																						
                    "asset_id": 18883,																						
                    "asset_title": "Technical Project Management",																						
                    "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",																						
                    "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",																						
                    "asset_type": "display_asset",																						
                    "asset_content_type": "video"																						
                },																						
                {																						
                    "asset_id": 18884,																						
                    "asset_title": "Threadbuild",																						
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",																						
                    "asset_content": " ",																						
                    "asset_type": "input_asset",																						
                    "asset_content_type": "threadbuilder"																						
                },																						
                {																						
                    "asset_id": 18885,																						
                    "asset_title": "Structure you pointers ",																						
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",																						
                    "asset_content": " ",																						
                    "asset_type": "input_asset",																						
                    "asset_content_type": "article"																						
                },																						
                {																						
                    "asset_id": 18886,																						
                    "asset_title": "4SA Method",																						
                    "asset_description": "To explore more read more",																						
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",																						
                    "asset_type": "display_asset",																						
                    "asset_content_type": "article"																						
                }																						
            ]																						
        }																						
    ],																						
    "tid": 2085,																						
    "timestamp": 1672891849700,																						
    "title": "Technical Project Management",																						
    "type": "project",																						
    "uid": 100,																						
    "viewcount": 0,																						
    "publishedAt": 1672893847792																						
}																						
                                                                                            
                                                                                            



document.addEventListener('DOMContentLoaded', ()=>{

    //Project title
    document.getElementById('project-title').textContent = projectData.title;

    const task = projectData.tasks[0];
    document.getElementById('task-title').textContent = task.task_title;
    document.getElementById('task-description').textContent = task.task_description;

    let assetsContainer = document.getElementById('assets-containers');

    console.log(task.assets)

    task.assets.forEach((asset, index) => {

        console.log(`Asset ${index + 1} Title: ${asset.asset_title}`);

        const assetDiv = document.createElement('div');
        assetDiv.classList.add('asset');

        const assetHeading = document.createElement('div');
        assetHeading.classList.add('asset-heading')
        const assetTitle = document.createElement('h4');
        assetTitle.classList.add('asset-title');
        assetTitle.textContent = asset.asset_title;
        assetHeading.appendChild(assetTitle)
        const assetInfo = document.createElement('div');
        assetInfo.classList.add('asset-info');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-info');
        assetInfo.appendChild(icon);
        assetHeading.appendChild(assetInfo);
        assetDiv.appendChild(assetHeading);

        const assetContents = document.createElement('div');
        assetContents.classList.add('asset-contents');

        const assetDescription = document.createElement('p');
        assetDescription.classList.add('asset-description');
        assetDescription.innerHTML = `<strong>Discription:</strong> ${asset.asset_description}`;
        assetContents.appendChild(assetDescription);

        let assetContent;
        switch (asset.asset_id) {
            case 18883:
                assetContent = document.createElement('iframe');
                assetContent.src = asset.asset_content;
                assetContent.width = "100%";
                assetContent.height = "60%";
                assetContent.frameBorder = "0";
                assetContent.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
                assetContent.allowFullscreen = true;
                break;
            case 18884:
                assetContent = document.createElement('iframe');
                assetContent.src = "threadbuilder.html";
                assetContent.width = '100%';
                assetContent.height = '80%';
                assetContent.style.borderRadius = '0 0 16px 16px';
                assetContent.style.border = 'none';
                assetContent.style.overflow = 'hidden';
                assetContent.classList.add('asset-content');
                break;
            case 18885:
                assetContent = document.createElement('iframe');
                assetContent.src = "article.html";
                assetContent.width = "100%";
                assetContent.height = "82.8%";
                assetContent.style.borderRadius = '0 0 16px 16px';
                assetContent.style.border = 'none';
                break;
            case 18886:
                assetContent = document.createElement('iframe');
                assetContent.src = "4sa.html";
                assetContent.width = "100%";
                assetContent.height = "82.8%";
                assetContent.style.borderRadius = '0 0 16px 16px';
                assetContent.style.border = 'none';
                break;
            default:
                assetContent = document.createElement('div');
                assetContent.textContent = "Asset Content";
        }
        
        
        
        assetDescription.addEventListener('click', ()=>{
            if (assetContents.contains(assetContent)) {
                assetContents.removeChild(assetContent);
                assetDiv.style.height = '20vh';
            }else if(assetContents.contains(assetContent) && asset.asset_id){

            } else {
                assetContents.appendChild(assetContent);
                assetDiv.style.height = '80vh';
            }
        })

        assetDiv.appendChild(assetContents);

        assetsContainer.appendChild(assetDiv);
    });
});

const journeyBoard = document.querySelector('.journey-board')
const journeyContent = document.querySelector('.journey-content')
const boardHeading = document.querySelector('.board-heading')
const arrow = document.querySelector('.board-heading i');
const boardTitle = document.querySelector('.board-heading h4');
const journeyContentList = document.querySelector('.journey-content ul')
const journeyOne = document.querySelector('.journey-one')

arrow.addEventListener('click', ()=>{
    if(journeyBoard.contains(journeyContent) && boardHeading.contains(boardTitle)){
        journeyContent.removeChild(journeyContentList);
        boardHeading.removeChild(boardTitle);
        arrow.classList.remove('fa-arrow-left');
        arrow.classList.add('fa-arrow-right');
        journeyOne.style.display = 'flex';
        journeyOne.style.marginTop = '1vw'
        journeyContent.style.display = 'flex';
        journeyContent.style.justifyContent = 'center';
    }else{
        journeyContent.appendChild(journeyContentList);
        boardHeading.appendChild(boardTitle);
        arrow.classList.remove('fa-arrow-right');
        arrow.classList.add('fa-arrow-left');
        journeyOne.style.display = 'none';

    }
})
