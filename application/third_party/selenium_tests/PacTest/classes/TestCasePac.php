<?php
class TestCasePac extends TestCase
{
	protected function click($label, $selector)
	{
		$menu_items = $this->browser->elements($selector);
		foreach($menu_items as $item)
		{
			$item_label = trim($item->text());
			if($item_label == $label)
			{
				$item->click();
				break;
			}
		}
	}
}
