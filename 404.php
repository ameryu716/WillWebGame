<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Vip_Business
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php if ( is_active_sidebar( 'sidebar-notfound' ) ) :
				dynamic_sidebar( 'sidebar-notfound' );
			else : ?>
			<section class="error-404 not-found">
				<?php
				$vip_business_enable = vip_business_gtm( 'vip_business_header_image_visibility' );

				if ( ! vip_business_display_section( $vip_business_enable ) ) : ?>
				<header class="page-header">
					<h1 class="page-title"><?php echo "ページが見つかりませんでした。"; ?></h1>
				</header><!-- .page-header -->
				<?php endif; ?>

				<div class="page-content">
					<p><?php esc_html_e( '無効なページです。URLが間違っていないでしょうか？当サイト内のリンクからここに来た場合は、お手数ですがお問い合わせフォームから報告をお願いします。このページは5秒後に自動的に閉じます。', 'vip-business' ); ?></p>

					<?php
					get_search_form();
					?>

				</div><!-- .page-content -->
			</section><!-- .error-404 -->
			<?php endif; ?>
		</main><!-- #main -->
	</div><!-- #primary -->
    <script>
        setTimeout(() => {
            location.href = "https://willwebgame.com";
        }, 5000);
    </script>

<?php
get_footer();