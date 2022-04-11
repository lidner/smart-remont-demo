<template>
	<div class="container">
		<div class="app">
			<div class="app__inner">
				<div class="app__header">
					<div class="app__header-left">
						<h1 class="app__header-title">Галерея проектов</h1>
						<p class="app__header-description">
							Сумма экономии рассчитана в сравнении с суммой цен этого же
							перечня товаров по отдельности
						</p>
						<button class="app__header-button">Выбрать дизайн</button>
					</div>
					<div class="app__header-right">
						<h2>Мы успешно завершили уже <span>более 450</span> ремонтов</h2>
					</div>
				</div>
				<div class="app__content">
					<div class="app__filter">
						<label for="remont">Тип ремонта:</label>
						<select class="select-remont" name="remont" id="remont">
							<option value="1">Comfort</option>
							<option value="1">Comfort +</option>
							<option value="1">Comfort Pro</option>
							<option value="1">Prime</option>
						</select>

						<p>Найдено 24 объекта:</p>
						<div class="app__filter-list">
							<div class="app__filter-list-item">
								<button class="app__filter-btn active">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
								<button class="app__filter-btn">ЖК Брилиантовый</button>
							</div>
						</div>
					</div>
					<div class="app__slider">
						<img
							class="app__slider-img"
							src="./assets/remont.jpg"
							alt="remont"
						/>
						<p class="app__slider-info">
							<span>ЖК Брилиантовый</span> - Нур-Султан, ул. Академика, 40
						</p>
                        <p class="app__slider-description">
                            Делали ремонт не по нашему проекту, а реализовывали чужой проект. Это был длительный ремонт. Высота потолков 3 метра. По проекту делали высокие двери скрытого монтажа, их высота примерно 2.8 метра. Использовали декоративный кирпич, декоративные штукатурки. На полу паркет. Душевую делали из мозаики.
                        </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters(['msg']),
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
.app {
	font-family: 'Montserrat', sans-serif;
}

.container {
	max-width: 1220px;
	margin: 0 auto;
	padding: 0 10px;
}

.app__header {
	display: flex;
	margin-bottom: 4rem;
}

.app__header-left {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 300px;
}

.app__header-title {
	font-size: 36px;
}

.app__header-description {
}

.app__header-button {
	padding: 1rem 2rem;
	background: inherit;
	border: 2px solid #e42734;
	color: #e42734;
	text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    display: flex;
    align-self: flex-start;
}

.app__header-right {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

.app__header-right h2 {
	max-width: 350px;
	font-weight: 600;
	color: #07325b;
}

.app__header-right h2 span {
	color: #e42734;
}

.app__content {
	display: flex;
	gap: 1rem;
	width: 100%;
}

.app__filter {
	max-width: 300px;
}



.select-remont,
.select-remont option {
	display: block;
	width: 100%;
	border: 0;
	margin: 0;
	display: inline-flex;
	padding: 0;
	position: relative;
	min-width: 0;
	flex-direction: column;
	vertical-align: top;
	color: #595959;
	border: 1px solid #595959;
	border-radius: 1px;
	padding: 0.8rem 1.2rem;
	font-weight: 700;
	font-size: 18px;
} 

.app__filter-list-item {
	max-height: 500px;
	overflow: auto;
}

.app__filter-list-item::-webkit-scrollbar {
	width: 0.25rem;
	width: 5px;
	height: 5px;
	background: #e3e3e3;
}

.app__filter-list-item::-webkit-scrollbar-thumb {
	background: #e42734;
	//   border-radius: 100px;
	//   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.app__filter-btn {
	padding: 0.8rem 1.2rem;
	color: #07325b;
	text-transform: uppercase;
	background: #f4f4f4;
	border: none;
	letter-spacing: 2px;
	margin-bottom: 10px;
	font-weight: 600;
	cursor: pointer;
}

.app__filter-btn.active {
	color: #fff;
	background: #07325b;
}

.app__slider-img {
    width: 100%;
	max-width: 900px;
    height: 400px;
    object-fit: cover;
	margin: 0 auto;
}

.app__slider-info {
    color: #595959;
}

.app__slider-info span {
	color: #07325b;
	font-weight: 700;
}

.app__slider-info span::before {
	content: '\A';
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #b83b3b;
	display: inline-block;
    margin-right: 5px;
}
</style>
